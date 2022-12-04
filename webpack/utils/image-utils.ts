export default class ImageUtils {
  static download(img: HTMLImageElement) {
    const a = document.createElement('a');
    a.href = img.src;
    a.download = img.src.split('/').pop();
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
