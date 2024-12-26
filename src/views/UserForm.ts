export class UserForm {
  constructor(public parent: Element) {}

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.onHeaderHover,
    };
  }

  onButtonClick(): void {
    console.log("How dare you click me!");
  }
  onHeaderHover(): void {
    console.log("You're like a helicopter.");
  }

  template(): string {
    return `
    <div>
    <h1>User Form</h1>
    <input />
    <button>Click Me</button>
    </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
