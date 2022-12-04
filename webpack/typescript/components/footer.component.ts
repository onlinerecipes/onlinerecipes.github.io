import { BaseStaticHtmlComponent } from './component.interface';

export class FooterHtmlComponent extends BaseStaticHtmlComponent {
  toHtml() {
    return /* html */ `
      <footer>
        <a class="logo" href='/'>
          <img src='/assets/logo.png' alt='logo' />
          <span>Online Recipes</span>
        </a>
        <div class="links">
          <a href="/contact">Contact</a>
          <span>|</span>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
        <p class="all-right-reserved">© 2022 Online Recipes. All rights reserved</p>
      </footer>
    `;
  }
}
