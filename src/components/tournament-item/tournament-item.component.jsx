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

    // console.log(favorite);

    // console.log("HHHHHHHHHHHHH", user);

    addFavorite(favorite, user);
  };

  return (
    // <div>
    //   {images ? <img className="round-img" src={`https://cdn-images.win.gg/${images.default.filePath}`} /> : null}
    //   <div>
    //     <h3>{title}</h3>
    //     <p>{description}</p>
    //   </div>
    // </div>

    <li
      title="Click to add favorites"
      className="collection-item avatar tournament-item"
      onClick={handleClick}
    >
      {images ? (
        <img
          alt=""
          className="circle"
          src={`https://cdn-images.win.gg/${images.default.filePath}`}
        />
      ) : null}
      <p className="title flow-text">
        <b>{title}</b>
      </p>
      <p>{description}</p>
    </li>
  );
}

export default connect(null, { addFavorite })(TournamentItem);
