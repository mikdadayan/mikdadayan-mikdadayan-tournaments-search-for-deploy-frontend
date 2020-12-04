import { connect } from "react-redux";
import { deleteFavorite } from "../../redux/tournament/tournament.actions";

function FavoriteItem({
  deleteFavorite,
  tournament: { _id, image, title, description },
}) {
  const handleClick = (e) => {
    e.preventDefault();
    deleteFavorite(_id);
  };

  return (
    <li className="collection-item avatar">
      <div className="row">
        <div className="col s11">
          {image !== "/" ? (
            <img
              alt=""
              className="circle"
              src={`https://cdn-images.win.gg/${image}`}
            />
          ) : null}
          <p className="title flow-text">
            <b>{title}</b>
          </p>
          <p>{description}</p>
        </div>
        <div className="col s1">
          <a
            className="btn-floating btn-small waves-effect waves-light red"
            onClick={handleClick}
          >
            <i className="material-icons">clear</i>
          </a>
        </div>
      </div>
    </li>
  );
}

export default connect(null, { deleteFavorite })(FavoriteItem);
