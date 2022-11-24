
import show from "./show.followers";
import create from "./create.followers";
import edit from "./edit.followers";
import list from "./list.followers";

export default { 
  name: "followers",
  label: "followers",
  hide: false,
  create,
  edit,
  list,
  show,
}