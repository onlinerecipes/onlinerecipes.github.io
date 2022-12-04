import { BaseHtmlComponent } from './component.interface';

export class CookiesConsentementHtmlComponent extends BaseHtmlComponent {
  private containerId: string;
  private container: HTMLElement;
  private buttonId: string;
  private button: HTMLElement;

  preInsertHtml(): void {
    this.containerId = this.generateId();
    this.buttonId = this.generateId();
  }

  toHtml() {
    return /* html */ `
      <div id="${this.containerId}" class="cookies-consentement-container">
        <div class="cookies-consentement-msg">
          <span class="iconify" data-icon="ant-design:info-circle-outlined"></span>
          <p>We use Cookies and Local Storage to improve your experience on our website. To find out more, read our <a href="/privacy-policy">Privacy policy</a></p>
        </div>
        <button id="${this.buttonId}">Got it</button> 
      </div>
    `;
  }

  postInsertHtml(): void {
    this.container = document.getElementById(this.containerId);
    this.button = document.getElementById(this.buttonId);
    setTimeout(() => {
      const consentementAlreadyShown = localStorage.getItem('consentementAlreadyShown') == 'true';
      if (!consentementAlreadyShown) {
        this.container.classList.add('active');
      }
    }, 2000);
    this.button.addEventListener('click', this.handleButtonClickEvent.bind(this));
  }

  private handleButtonClickEvent() {
    this.container.classList.remove('active');
    localStorage.setItem('consentementAlreadyShown', 'true');
  }
}
