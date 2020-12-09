import { connect } from "react-redux";
import FavoriteItem from "../favorite-item/favorite-item.component";



function Favorites({ favorites }) {
  let favoriteTournaments = [];
  favoriteTournaments = favorites.map((favorite) => {
    return <FavoriteItem key={favorite._id} tournament={favorite} />;
  });
  return (
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Favorites</h4>
        {favoriteTournaments.length > 0 ? (
          <ul className="collection">{favoriteTournaments}</ul>
        ) : <div><h6>You have not favorite Tournaments</h6></div>}
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">
          CLOSE
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  favorites: state.tournaments.favorites,
});

export default connect(mapStateToProps)(Favorites);
