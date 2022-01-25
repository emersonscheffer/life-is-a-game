import { ADD_GAME, GET_GAME, DELETE_GAME, UPDATE_GAME, GAMES_LOADING } from "../actions/types";

const initialState = {
  games: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GAME:
      return {
        ...state,
        games: action.payload,
        loading: false
      };
    case ADD_GAME:
      return {
        ...state,
        games: [action.payload, ...state.games]
      };
    case DELETE_GAME:
      return {
          ...state,
          games: state.games.filter(game => game._id !== action.payload)
      }
    case UPDATE_GAME:
      return {
          ...state,
          games: state.games.filter(game => game._id !== action.payload)
      }
    case GAMES_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state;
  }
}
