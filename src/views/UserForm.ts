import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button#set-age": this.onSetAgeClick,
      "click:button#set-name": this.onSetNameClick,
      "click:button#save-model": this.onSaveClick,
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

  onSaveClick = (): void => {
    this.model.save();
  };

  template(): string {
    return `
    <div>
      <input placeholder="${this.model.get("name")}"/>
      <button id="set-name">Update Name</button>
      <button id="set-age">Set Random Age</button>
      <button id="save-model">Save User</button>
    </div>
    `;
  }
}
