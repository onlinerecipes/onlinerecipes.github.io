import { BaseStaticHtmlComponent } from './component.interface';

export class WelcomeMessageHtmlComponent extends BaseStaticHtmlComponent {
  toHtml() {
    return /* html */ `
      <div class="welcome-message">
        <span class="linear-gradient-text first-message">Welcome to DEV Knowledge</span>
        <span class="second-message">We are happy to have you on board and hope you find our contents useful</span>
      </div>
    `;
  }
}
