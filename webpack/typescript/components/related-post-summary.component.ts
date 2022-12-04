import { PostSummary } from '../models/post-summary.model';
import { BaseStaticHtmlComponent } from './component.interface';

export class RelatedPostSummaryHtmlComponent extends BaseStaticHtmlComponent {
  constructor(private relatedPost: PostSummary) {
    super();
  }

  toHtml() {
    return /* html */ `
        <a href="${this.relatedPost.url}" class="related-post-summary">
            ${this.relatedPost.title}
        </a>
    `;
  }
}
