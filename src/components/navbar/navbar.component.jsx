import { useEffect } from "react";
import M from "materialize-css";

function Navbar() {
  useEffect(() => {
    let elems = document.querySelectorAll(".modal");
    let instances = M.Modal.init(elems, {});
  }, []);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo" onClick={(e) => e.preventDefault()}>
          Tournament Search
        </a>
        <ul className="right">
          <li>
            <a
              href="#modal1"
              className="waves-effect waves-light btn red lighten-3 modal-trigger"
            >
              Favorites
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
