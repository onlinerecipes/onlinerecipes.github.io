import { HtmlComponent } from '../typescript/components/component.interface';
import { CookiesConsentementHtmlComponent } from '../typescript/components/cookies-consentement.component';
import { FooterHtmlComponent } from '../typescript/components/footer.component';
import { NavbarHtmlComponent } from '../typescript/components/navbar.component';
import Gifffer from 'gifffer';

export const BODY_CLASS_LIST_LOCAL_STORAGE_KEY = 'body-class-list-local-storage-key-v1.0';

export default class PageUtils {
  static resetBodyClassList(): void {
    document.body.classList.value = localStorage.getItem(BODY_CLASS_LIST_LOCAL_STORAGE_KEY) || 'light';
  }
  static insertNavbar(component: HtmlComponent = new NavbarHtmlComponent()) {
    component.insert(document.body, 'afterbegin');
  }

  static insertFooter(component: HtmlComponent = new FooterHtmlComponent()) {
    component.insert(document.body, 'beforeend');
  }

  static insertPrivacyPolicyConsentement() {
    new CookiesConsentementHtmlComponent().insert(document.body, 'beforeend');
  }

  static hideLoader() {
    const maxDuration = 1750;
    const duration = new Date().getTime() - (window as any).startTime;
    const timeout = maxDuration - duration > 0 ? maxDuration - duration : 0;
    setTimeout(() => {
      document.querySelector('.loader').classList.add('hide');
      document.querySelector('#app').classList.remove('on-loading');
    }, timeout);
  }

  static giffer() {
    Gifffer({
      playButtonStyles: {
        width: '60px',
        height: '60px',
        'border-radius': '30px',
        background: 'rgba(0, 0, 0, 0.15)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '-30px 0 0 -30px',
      },
      playButtonIconStyles: {
        width: '0',
        height: '0',
        'border-top': '14px solid transparent',
        'border-bottom': '14px solid transparent',
        'border-left': '14px solid rgba(0, 0, 0, 0.35)',
        position: 'absolute',
        left: '26px',
        top: '16px',
      },
    });
    setTimeout(() => {
      const gifs = document.querySelectorAll('.gifffer-play-button');
      gifs.forEach((gif) => (gif as HTMLElement).click());
    }, 1000);
  }
}
