import { combineReducers } from 'redux';
import Books from './books';
import ActiveBook from './activeBook';

const rootReducer = combineReducers({
    books: Books,
    activeBook: ActiveBook
});

export default rootReducer;
