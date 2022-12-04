import { BaseHtmlComponent, HtmlComponent } from './component.interface';
import { PostCommentsHtmlComponent } from './post-comments.component';
import { PostMarkdownHtmlComponent } from './post-markdown.component';
import { PostOverviewHtmlComponent } from './post-overview.component';
import { RelatedPostSummaryListHtmlComponent } from './related-post-summary-list.component';

export class PostMainHtmlComponent extends BaseHtmlComponent {
  private components: Array<HtmlComponent>;
  private comments = new PostCommentsHtmlComponent();
  private relatedPosts = new RelatedPostSummaryListHtmlComponent();

  constructor() {
    super();
    this.components = [];
    this.components.push(new PostOverviewHtmlComponent());
    this.components.push(new PostMarkdownHtmlComponent());
  }

  preInsertHtml() {
    this.components.forEach((component) => component.preInsertHtml());
    this.comments.preInsertHtml();
    this.relatedPosts.preInsertHtml();
  }

  toHtml() {
    return /* html */ `
      <main>
        <div class="left">
          <div class="post">
            ${this.components.map((component) => component.toHtml()).join(' ')}
          </div>
          <div class="post post-comments">
            ${this.comments.toHtml()}
          </div>
        </div>
        <div class="right">
          ${this.relatedPosts.toHtml()}
        </div>
      </main>
    `;
  }

  postInsertHtml() {
    this.components.forEach((component) => component.postInsertHtml());
    this.comments.postInsertHtml();
    this.relatedPosts.postInsertHtml();
  }
}
