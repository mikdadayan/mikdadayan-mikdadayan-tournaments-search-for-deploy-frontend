import { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { getTournaments } from "../../redux/tournament/tournament.actions";

function SearchBox({ handleSubmit, getTournaments }) {
  const [searchText, setSearchText] = useState("");
  const [requestController, setRequestController] = useState(null);

  useEffect(() => {
    if (requestController) {
      // Abort request
      requestController.abort();
    }
    const controller = new AbortController();
    const { signal } = controller;
    getTournaments(searchText, signal);
    setRequestController(controller);
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  console.log("SearchBox")
  return (
    <Fragment>
      <form onSubmit={handleSubmit} className="col item-form " action="">
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              placeholder="Search Tourament"
              name="search"
              onChange={handleChange}
              value={searchText}
              autoFocus
            />
          </div>
        </div>
      </form>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  tournaments: state.tournaments.tournaments,
  requestController: state.tournaments.requestController,
});

export default connect(mapStateToProps, { getTournaments })(SearchBox);
