export default class AsyncUtils {
  static setIntervalAndExecute(fn, duration) {
    fn();
    return setInterval(fn, duration);
  }

  static async sleep(duration: number) {
    await new Promise((r) => setTimeout(r, duration));
  }
}
