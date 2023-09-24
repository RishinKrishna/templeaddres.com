import { createRoot } from "react-dom/client";
import Modal from "./components/Modal";
import { createPortal } from "react-dom";

const modal = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const portalNode = document.querySelector("#modal");
  if (!portalNode) {
    const div = document.createElement("div");
    div.id = "modal";
    // div.className = outfit.className
    document.querySelector("#root")?.append(div);
  }

  const addedPortalNode = document.querySelector("#modal");
  if (addedPortalNode) {
    const root = createRoot(addedPortalNode);
    root.render(createPortal(<Modal {...props} />, addedPortalNode));
  } else {
    console.error(`Error: no node found div with id of modal`);
    return null;
  }
};

export { modal };
