import { UserEdit } from "./views/UserEdit";
import { User } from "./models/User";

const user = User.buildUser({ name: "Peppermint Butler", age: 150 });

const rootDiv = document.getElementById("root");
if (rootDiv) {
  const userEdit = new UserEdit(rootDiv, user);

  userEdit.render();
  console.log(userEdit);
} else {
  throw new Error("Root element not found.");
}
