export interface HtmlComponent {
  toHtml(): string;

  preInsertHtml(): void;

  insert(parentElement: HTMLElement, insertPosition: InsertPosition): void;

  insertHtml(parentElement: HTMLElement, insertPosition: InsertPosition): void;

  postInsertHtml(): void;
}

export abstract class BaseHtmlComponent implements HtmlComponent {
  abstract toHtml(): string;

  abstract postInsertHtml(): void;

  insert(parentElement: HTMLElement, insertPosition: InsertPosition) {
    this.preInsertHtml();
    this.insertHtml(parentElement, insertPosition);
    this.postInsertHtml();
  }

  preInsertHtml(): void {
    // nothing to do!
  }

  insertHtml(parentElement: HTMLElement, insertPosition: InsertPosition): void {
    parentElement.insertAdjacentHTML(insertPosition, this.toHtml());
  }

  dispatchCustomEvent(eventName: string, eventDetail = {}) {
    document.dispatchEvent(
      new CustomEvent(eventName, {
        detail: eventDetail,
      })
    );
  }

  addCustomEventListener(eventName: string, listener: EventListener) {
    document.addEventListener(eventName, listener);
  }

  delay(fn, ms) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(fn.bind(this, ...args), ms || 0);
    };
  }

  generateId(): string {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}

export abstract class BaseStaticHtmlComponent extends BaseHtmlComponent {
  postInsertHtml(): void {
    // nothing to do!
  }
}
