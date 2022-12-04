export const ENTER_KEY_CODE = 13;
export const SPACE_KEY_CODE = 32;
export const QUOTE_KEY_CODE = 52;
export const ESCAPE_KEY_CODE = 27;
export const TAB_KEY_CODE = 9;
export const ARROW_UP_KEY_CODE = 38;
export const ARROW_DOWN_KEY_CODE = 40;

export class KeyboardUtils {
  static blurActiveElementOnEscapeKeydownEvent() {
    document.addEventListener('keydown', (event) => {
      if (event.keyCode == ESCAPE_KEY_CODE) {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }
    });
  }
}
