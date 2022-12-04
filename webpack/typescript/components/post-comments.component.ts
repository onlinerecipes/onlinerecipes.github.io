import { BaseHtmlComponent } from './component.interface';

export class PostCommentsHtmlComponent extends BaseHtmlComponent {
  toHtml() {
    return /* html */ `
      <div id="disqus_thread"></div>
    `;
  }

  postInsertHtml(): void {
    const d = document;
    const s = d.createElement('script');
    s.src = 'https://dev-knowledge.disqus.com/embed.js';
    s.setAttribute('data-timestamp', new Date() + '');
    (d.head || d.body).appendChild(s);
  }
}
