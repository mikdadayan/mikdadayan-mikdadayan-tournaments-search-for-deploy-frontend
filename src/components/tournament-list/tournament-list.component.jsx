import { Fragment } from "react";
import { connect } from "react-redux";

import TournamentItem from "../tournament-item/tournament-item.component";
function TournamentList({ tournaments }) {
  const allTournaments = tournaments.map((tournament) => (
    <TournamentItem key={tournament.id} tournament={tournament} />
  ));
  return (
    <Fragment >
      {allTournaments.length > 0 ? (
        <ul className="collection">{allTournaments}</ul>
      ) : null}
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  tournaments: state.tournaments.tournaments,
});

export default connect(mapStateToProps)(TournamentList);
