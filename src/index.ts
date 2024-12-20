import { User } from "./models/User";

const user = new User({ name: "Sven", age: 22 });

user.on("change", () => {
  console.log("Something changed!");
});
user.on("click", () => {
  console.log("Stop clicking me!");
});

user.trigger("change");
user.trigger("click");
