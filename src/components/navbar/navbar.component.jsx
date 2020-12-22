import React from "react";
import { useEffect } from "react";
import M from "materialize-css";
import Header from "../header/header.component";


export default React.memo ( function Navbar() {
  useEffect(() => {
    let elems = document.querySelectorAll(".modal");
    let instances = M.Modal.init(elems, {});
  }, []);
  return (
    <nav>
      <div className="nav-wrapper">
        <Header/>
        <ul className="right">
          <li>
            <a
              href="#modal1"
              className="waves-effect waves-light btn red lighten-3 modal-trigger"
              onClick={(e) => e.preventDefault()}
            >
              <i className="medium material-icons">favorite_border</i>
              
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
})

// export default Navbar;
