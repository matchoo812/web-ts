import { User } from "./models/User";

const user = new User({ name: "Sven", age: 22 });

console.log(user.get("name"));
console.log(user.get("age"));
