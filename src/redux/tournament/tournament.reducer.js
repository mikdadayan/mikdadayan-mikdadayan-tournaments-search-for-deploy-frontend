import TournamentActionTypes from "./tournament.types";

const {
  GET_ALL_TOURNAMENTS,
  TOURNAMENTS_ERROR,
  GET_FAVORITES,
  GET_FAVORITES_ERROR,
  ADD_FAVORITE,
  DELETE_FAVORITE,
} = TournamentActionTypes;

const INITIAL_STATE = {
  tournament: null,
  tournaments: [],
  favorites: [],
  error: {},
};

const tournamentReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_TOURNAMENTS:
      return {
        ...state,
        requestController: payload.requestController,
        tournaments: payload.tournaments,
      };
    case TOURNAMENTS_ERROR:
      return {
        ...state,
        tournaments: [],
      };
    case GET_FAVORITES:
      return { ...state, favorites: payload.favorites };
    case GET_FAVORITES_ERROR:
      return { ...state, favorites: [] };
    case ADD_FAVORITE:
      return { ...state, favorites: state.favorites.concat(payload.favorite) };
    case DELETE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((favorite) => favorite._id !== payload.deletedFavorite._id),
      };
    default:
      return state;
  }
};

export default tournamentReducer;
