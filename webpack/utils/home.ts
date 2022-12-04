import 'sass/home.scss';
import { HtmlComponent } from '../typescript/components/component.interface';
import { CookiesConsentementHtmlComponent } from '../typescript/components/cookies-consentement.component';
import { FooterHtmlComponent } from '../typescript/components/footer.component';
import { HomeMainHtmlComponent } from '../typescript/components/home-main';
import { NavbarHtmlComponent } from '../typescript/components/navbar.component';

const app = document.querySelector('#app') as HTMLElement;

const components: HtmlComponent[] = [];
components.push(new NavbarHtmlComponent());
components.push(new HomeMainHtmlComponent());
components.push(new FooterHtmlComponent());
components.push(new CookiesConsentementHtmlComponent());

components.forEach((component) => component.preInsertHtml());
components.forEach((component) => component.insertHtml(app, 'beforeend'));
components.forEach((component) => component.postInsertHtml());
