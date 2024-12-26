import { User } from "../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button#set-age": this.onSetAgeClick,
      "click:button#set-name": this.onSetNameClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  onSetNameClick = (): void => {
    const nameInput = this.parent.querySelector("input");
    if (nameInput) {
      const name = nameInput.value;
      this.model.set({ name: name });
    }
  };

  template(): string {
    return `
    <div>
    <h1>User Form</h1>
    <div>Name: ${this.model.get("name")}</div>
    <div>Age: ${this.model.get("age")}</div>
    <input />
    <button id="set-name">Update Name</button>
    <button id="set-age">Set Random Age</button>
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
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
