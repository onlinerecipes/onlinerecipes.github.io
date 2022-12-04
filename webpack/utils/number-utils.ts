export default class NumberUtils {
  static isBetween(number: number, left: number, right: number) {
    return number >= left && number <= right;
  }

  static isNotBetween(number: number, left: number, right: number) {
    return !NumberUtils.isBetween(number, left, right);
  }

  static randomBetween(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
  }
}
