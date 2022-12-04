export default class EventUtils {
  static stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }
}
