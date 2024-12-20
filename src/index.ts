import { User } from "./models/User";

const user = new User({ name: "Finn", age: 13 });

user.save();
