import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import columnsReducer from "./columnsRedux";
import cardsReducer from "./cardsRedux";
import searchStringReducer from "./searchStringRedux";
import listsReducer from "./listsRedux";

export { addList, getAllLists, getListById } from "./listsRedux";
export { addColumn, getAllColumns, getColumnsByList } from "./columnsRedux";
export {
  addCard,
  toggleCardFavorite,
  removeCard,
  getFilteredCards,
  getFavoriteCards,
} from "./cardsRedux";
export { updateSearchString } from "./searchStringRedux";

// reducer

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
};

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
