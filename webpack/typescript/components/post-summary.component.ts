import { PostSummary } from '../models/post-summary.model';
import { BaseStaticHtmlComponent } from './component.interface';

export class PostSummaryHtmlComponent extends BaseStaticHtmlComponent {
  constructor(private post: PostSummary) {
    super();
  }

  toHtml() {
    return /* html */ `
      <a class="post-summary" href="${this.post.url}">
        <h2 class="post-summary__title">${this.post.title}</h2>
        <div class="post-summary__bottom">
          <p class="post-summary__extract">${this.post.excerpt}</p>
          <div class="post-summary__read-more">
            <span>Read more</span>
            <span class="iconify" data-icon="bi:arrow-right"></span>
          </div>
        </div>
      </a>
    `;
  }
}
