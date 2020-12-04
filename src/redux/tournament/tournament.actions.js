import TournamentActionTypes from "./tournament.types";

const {
  GET_ALL_TOURNAMENTS,
  TOURNAMENTS_ERROR,
  GET_FAVORITES,
  GET_FAVORITES_ERROR,
  ADD_FAVORITE,
  ADD_FAVORITE_ERROR,
  DELETE_FAVORITE,
} = TournamentActionTypes;

export const getTournaments = (searchText, signal) => async (dispatch) => {
  if (searchText.length <= 2) {
    dispatch({ type: TOURNAMENTS_ERROR });
  } else if (searchText.length > 2) {
    const config = { signal: signal };
    fetch(
      `https://api-search.win.gg/search?q=${searchText}&index=tournament`,
      config
    )
      .then((response) => response.json())
      .then((tournaments) =>
        dispatch({
          type: GET_ALL_TOURNAMENTS,
          payload: {
            tournaments: tournaments[0].documents.slice(0, 10),
          },
        })
      )
      .catch((e) => {
        console.warn(`Fetch 1 error: ${e.message}`);
      });
  }
};

export const getFavoriteTournaments = (user) => async (dispatch) => {
  try {
    const response = await fetch("https://peaceful-thicket-48357.herokuapp.com/api/tournaments", {
      method: "get",
      headers: new Headers({
        "x-auth-token": user,
      }),
    });
    const favoriteTournaments = await response.json();
    if (response.status === 500 || response.status === 401) {
      dispatch({ type: GET_FAVORITES_ERROR });

      throw new Error(favoriteTournaments.msg);
    }
    dispatch({
      type: GET_FAVORITES,
      payload: { favorites: favoriteTournaments.tournaments },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const addFavorite = (favorite, user) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://peaceful-thicket-48357.herokuapp.com/api/tournaments/favorites",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...favorite, user_id: user }),
      }
    );

    if (response.status === 409) {
      throw new Error("You already added this tournament in favorites.");
    }

    const favoriteTournament = await response.json();
    // Store user_id in localStorage
    localStorage.setItem("user_id", favoriteTournament.tournament.user_id);

    if (response.status === 500 || response.status === 401) {
      dispatch({ type: ADD_FAVORITE_ERROR });

      throw new Error(favoriteTournament.msg);
    }
    dispatch({
      type: ADD_FAVORITE,
      payload: { favorite: favoriteTournament.tournament },
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteFavorite = (id) => async (dispatch) => {
  fetch(`https://peaceful-thicket-48357.herokuapp.com/api/tournaments/favorites/${id}`, {
    method: "delete",
  })
    .then((response) => response.json())
    .then((deletedInfo) =>
      dispatch({
        type: DELETE_FAVORITE,
        payload: {
          deletedFavorite: deletedInfo.deletedFavorite,
        },
      })
    )
    .catch((e) => {
      console.warn(`Fetch 1 error: ${e.message}`);
    });
};
