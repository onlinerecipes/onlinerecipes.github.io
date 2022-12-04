import 'sass/post.scss';
import { HtmlComponent } from './typescript/components/component.interface';
import { CookiesConsentementHtmlComponent } from './typescript/components/cookies-consentement.component';
import { FooterHtmlComponent } from './typescript/components/footer.component';
import { NavbarHtmlComponent } from './typescript/components/navbar.component';
import { PostMainHtmlComponent } from './typescript/components/post-main';
import PageUtils from './utils/page-utils';

const app = document.querySelector('#app') as HTMLElement;

const components: HtmlComponent[] = [];
components.push(new NavbarHtmlComponent());
components.push(new PostMainHtmlComponent());
components.push(new FooterHtmlComponent());
components.push(new CookiesConsentementHtmlComponent());

components.forEach((component) => component.preInsertHtml());
components.forEach((component) => component.insertHtml(app, 'beforeend'));
components.forEach((component) => component.postInsertHtml());
PageUtils.hideLoader();
PageUtils.giffer();
