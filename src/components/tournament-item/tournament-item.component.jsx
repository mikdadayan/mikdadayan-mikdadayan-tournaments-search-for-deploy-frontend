import { connect } from "react-redux";
import { addFavorite } from "../../redux/tournament/tournament.actions";

import "./tournament-item.component.css";

function TournamentItem({
  addFavorite,
  tournament: { id, images, title, description },
}) {
  // let user
  const handleClick = () => {
    let user = localStorage.getItem("user_id");
    const favorite = {
      tournament_id: id,
      title: title,
      image: images ? images.default.filePath : "/",
      description: description,
    };
    addFavorite(favorite, user);
  };

  return (
    <li
      title="Click to add favorites"
      className="collection-item avatar tournament-item"
      onClick={handleClick}
    >
      <div className="row">
        <div className="col s3">
          {images ? (
            <img
              alt=""
              className="circle"
              src={`https://cdn-images.win.gg/${images.default.filePath}`}
            />
          ) : null}
        </div>
        <div className="col s9">
          <p className="title flow-text">
            <b>{title}</b>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}

export default connect(null, { addFavorite })(TournamentItem);
