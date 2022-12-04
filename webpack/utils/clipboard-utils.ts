export class ClipboardUtils {
  static copyFromSpanElement(span: HTMLSpanElement) {
    const text = span.innerHTML;
    if (text == 'Copied!') return;
    const el = document.createElement('textarea');
    el.value = span.dataset.copy;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    span.innerText = 'Copied!';
    const initialFontSize = span.style.fontFamily;
    setTimeout(() => {
      span.innerHTML = text;
      span.style.fontFamily = initialFontSize;
    }, 1500);
  }

  static copyFromInputElement(input: HTMLInputElement) {
    const text = input.value;
    if (text == 'Copied!') return;
    const el = document.createElement('textarea');
    el.value = input.value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    input.value = 'Copied!';
    const initialFontSize = input.style.fontFamily;
    setTimeout(() => {
      input.value = text;
      input.style.fontFamily = initialFontSize;
    }, 1500);
  }

  static copyFromTextareaElement(input: HTMLTextAreaElement) {
    const text = input.value;
    if (text == 'Copied!') return;
    const el = document.createElement('textarea');
    el.value = input.value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    input.value = 'Copied!';
    const initialFontSize = input.style.fontFamily;
    setTimeout(() => {
      input.value = text;
      input.style.fontFamily = initialFontSize;
    }, 1500);
  }

  static copy(text: string, hint: HTMLElement) {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    hint.classList.remove('hidden');
    setTimeout(() => {
      hint.classList.add('hidden');
    }, 1500);
  }
}
