import { UserForm } from "./views/UserForm";

const rootDiv = document.getElementById("root");
if (rootDiv) {
  const userForm = new UserForm(rootDiv);

  userForm.render();
}
