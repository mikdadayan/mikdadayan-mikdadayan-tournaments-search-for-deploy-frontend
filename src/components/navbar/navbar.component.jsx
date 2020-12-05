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
        <a href="#" className="small brand-logo left" onClick={(e) => e.preventDefault()}>
          Tournaments
        </a>
        <ul className="right">
          <li>
            <a
              href="#modal1"
              className="waves-effect waves-light btn red lighten-3 modal-trigger"
              onClick={(e) => e.preventDefault()}
            >
              <i class="medium material-icons">favorite_border</i>
              
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
