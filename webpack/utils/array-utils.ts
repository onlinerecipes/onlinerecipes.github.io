export class ArrayUtils {
  static equals<T>(array1: T[], array2: T[]) {
    return JSON.stringify(array1) == JSON.stringify(array2);
  }

  static notEquals<T>(array1: T[], array2: T[]) {
    return !ArrayUtils.equals(array1, array2);
  }

  static shuffle<T>(array: T[]) {
    let currentIndex = array.length;
    let randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
