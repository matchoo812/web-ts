import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
  constructor(public parent: Element, public collection: Collection<T, K>) {}

  //  pass in model and specify where it should be rendered
  abstract renderItem(model: T, itemParent: Element): void;

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");

    for (let model of this.collection.models) {
      const parentElement = document.createElement("div");

      this.renderItem(model, parentElement);
      templateElement.content.append(parentElement);
    }

    this.parent.append(templateElement.content);
  }
}
