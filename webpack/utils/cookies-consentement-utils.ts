export const COOKIES_CONSENTEMENT_ALREADY_SHOWN_LOCAL_STORAGE_KEY = 'cookies-consentement-already-shown-local-storage-key-v1.0';

export default class CookiesConsentementUtils {
  static isAlreadyShown(): boolean {
    return (localStorage.getItem(COOKIES_CONSENTEMENT_ALREADY_SHOWN_LOCAL_STORAGE_KEY) || 'false') == 'true';
  }

  static isNotAlreadyShown(): boolean {
    return !CookiesConsentementUtils.isAlreadyShown();
  }

  static setAlreadyShown(): void {
    localStorage.setItem(COOKIES_CONSENTEMENT_ALREADY_SHOWN_LOCAL_STORAGE_KEY, 'true');
  }
}
