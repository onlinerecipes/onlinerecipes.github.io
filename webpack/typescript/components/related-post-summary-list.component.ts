import { ArrayUtils } from '../../utils/array-utils';
import { BaseStaticHtmlComponent } from './component.interface';
import { RelatedPostSummaryHtmlComponent } from './related-post-summary.component';

export class RelatedPostSummaryListHtmlComponent extends BaseStaticHtmlComponent {
  toHtml() {
    const relatedPostsHtml = this.getRelatedPostsHtml();
    if (!relatedPostsHtml) {
      return '';
    }
    return /* html */ `
      <div class="related-posts-wrapper">
        <h2 class="related-posts-title">Related posts</h2>
        <div class="related-posts">${relatedPostsHtml}</div>
        <a href="/" class="more-tools-button"><span class="label">More Articles</span><span class="iconify" data-icon="bi:arrow-right"></span></a>
      </div>
    `;
  }

  private getRelatedPostsHtml() {
    let res = '';
    const currentUrl = window.location.pathname.replace('.html', '');
    ArrayUtils.shuffle(window.jekyll.posts)
      .filter((p) => p.url != currentUrl)
      .slice(0, 5)
      .forEach((post) => {
        res += new RelatedPostSummaryHtmlComponent(post).toHtml();
      });
    return res;
  }
}
