import { PostSummary } from '../models/post-summary.model';
import { BaseHtmlComponent } from './component.interface';
import { DISPLAYED_POSTS_CHANGE_EVENT_NAME, FILTER_POSTS_EVENT_NAME, LOAD_MORE_POSTS_EVENT_NAME } from '../constants/events.constants';
import { PostSummaryTemplateHtmlComponent } from './post-summary-template.component';
import { PostSummaryHtmlComponent } from './post-summary.component';

const POST_SUMMARY_LIST_ID = 'POST_SUMMARY_LIST_ID';

export class PostSummaryListHtmlComponent extends BaseHtmlComponent {
  private postSummaryTemplate: PostSummaryTemplateHtmlComponent;
  private allPosts: Array<PostSummary>;
  private filteredPosts: Array<PostSummary>;
  private displayedPosts: Array<PostSummary>;
  private postSummaryListDomElement: HTMLElement;
  private postsColumnsNumber: number;
  private loadPostsMaxNumber: number;
  private maxDisplayedPostsNumber: number;

  toHtml() {
    return /* html */ `
      <div id="${POST_SUMMARY_LIST_ID}" class="post-summary-list"></div>
    `;
  }

  postInsertHtml() {
    this.initClassAttributes();
    this.loadPosts(0);
    this.addCustomEventListener(LOAD_MORE_POSTS_EVENT_NAME, this.handleLoadMorePostsEvent.bind(this));
    this.addCustomEventListener(FILTER_POSTS_EVENT_NAME, this.handleFilterPostsEvent.bind(this));
  }

  private handleFilterPostsEvent(event) {
    const postSearchQuery = event.detail;
    // this.filteredPosts = this.filterBySelectedCategories(this.allPosts, postSearchQuery.selectedCategoriesLowercase);
    this.filteredPosts = this.filterByTextInput(this.allPosts, postSearchQuery.searchInputText);
    this.displayedPosts = this.filteredPosts.slice(0, this.maxDisplayedPostsNumber);
    this.postSummaryListDomElement.innerHTML = '';
    this.loadPosts(750);
  }

  private filterBySelectedCategories(posts, selectedCategoriesLowercase) {
    return posts.filter((post) => selectedCategoriesLowercase.includes(post.category));
  }

  private filterByTextInput(posts, textInput) {
    if (textInput) {
      const textInputWords = textInput.split(/\s+/).map((word) => word.toLowerCase());
      return posts.filter((post) => {
        for (const word of textInputWords) {
          if (post.search_key.toLowerCase().indexOf(word) > -1) {
            return true;
          }
        }
        return false;
      });
    }
    return posts;
  }

  private handleLoadMorePostsEvent() {
    this.maxDisplayedPostsNumber = this.displayedPosts.length + this.loadPostsMaxNumber;
    this.displayedPosts = this.filteredPosts.slice(0, this.maxDisplayedPostsNumber);
    this.loadPosts(2000);
  }

  private initClassAttributes() {
    this.postSummaryTemplate = new PostSummaryTemplateHtmlComponent();
    this.postSummaryListDomElement = document.getElementById(POST_SUMMARY_LIST_ID);
    this.allPosts = window.jekyll.posts;
    this.filteredPosts = [...this.allPosts];
    this.postsColumnsNumber = this.getPostsColumnsNumber();
    this.loadPostsMaxNumber = this.getLoadPostsMaxNumber();
    this.maxDisplayedPostsNumber = this.loadPostsMaxNumber;
    this.displayedPosts = this.filteredPosts.slice(0, this.loadPostsMaxNumber);
  }

  private getPostsColumnsNumber(): number {
    try {
      return window.getComputedStyle(this.postSummaryListDomElement).gridTemplateColumns.split(' ').length;
    } catch (error) {
      console.error('error while executing PostSummaryListHtmlComponent.getPostsColumnsNumber method. error: ' + error);
      return 3;
    }
  }

  getLoadPostsMaxNumber(): number {
    // if (this.allPosts.length <= 10) return this.allPosts.length;
    // let divisor = this.postsColumnsNumber < 3 ? 4 : this.postsColumnsNumber;
    // return Math.floor(this.allPosts.length / divisor) + (divisor - (Math.floor(this.allPosts.length / divisor) % divisor));
    return this.postsColumnsNumber * 3;
  }

  private loadPosts(delay: number) {
    for (let i = 0; i < this.postsColumnsNumber; i++) {
      this.postSummaryListDomElement.insertAdjacentHTML('beforeend', this.postSummaryTemplate.toHtml());
    }
    if (this.displayedPosts.length > 0) {
      this.handlePostBannerLoadEvent(delay);
    } else {
      this.renderNoPostToDisplay(delay);
    }
    this.dispatchDisplayedPostsChangeEvent();
  }

  private handlePostBannerLoadEvent(delay: number) {
    setTimeout(() => {
      let newPostSummaryHtml = '';
      this.displayedPosts.forEach((post) => (newPostSummaryHtml += new PostSummaryHtmlComponent(post).toHtml()));
      this.postSummaryListDomElement.classList.add('on-change');
      setTimeout(() => {
        this.postSummaryListDomElement.innerHTML = newPostSummaryHtml;
        this.postSummaryListDomElement.classList.remove('on-change');
      }, 800);
    }, delay);
  }

  private renderNoPostToDisplay(delay: number) {
    setTimeout(() => {
      this.postSummaryListDomElement.innerHTML = /*html*/ `
        <div class="no-post-to-display">
          <p>No posts to display!</p>
          <p>
            Please give us your suggestion in this 
            <a target="_blank" href="https://github.com/devknowledge/devknowledge.github.io/issues/25">github discussion</a>
          </p>
        </div>
      `;
    }, delay);
  }

  private dispatchDisplayedPostsChangeEvent() {
    setTimeout(() => {
      this.dispatchCustomEvent(DISPLAYED_POSTS_CHANGE_EVENT_NAME, {
        displayedPostsCount: this.displayedPosts.length,
        filteredPostsCount: this.filteredPosts.length,
      });
    }, 0);
  }
}
