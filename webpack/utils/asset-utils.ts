import { CHANGE_THEME_EVENT } from '../components/change-theme-icon/change-theme-icon.component';
import PageUtils from './page-utils';

export class AssetUtils {
  static showHomeKeysPositionImage() {
    AssetUtils.changeHomeKeysPositionImage();
    document.addEventListener(CHANGE_THEME_EVENT, AssetUtils.changeHomeKeysPositionImage);
  }

  private static changeHomeKeysPositionImage() {
    const homeKeysPositionImage = document.getElementById('homeKeysPositionImage') as HTMLImageElement;
    if (PageUtils.isDarkTheme()) {
      homeKeysPositionImage.src = '/home-keys-position-dark.svg';
    } else {
      homeKeysPositionImage.src = '/home-keys-position-light.svg';
    }
  }
}
