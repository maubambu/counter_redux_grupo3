import CounterReducer from './../reducers/CounterReducer';
import { createStore, combineReducers } from 'redux';
import FilterReducer from './../reducers/CounterReducer';
import Counter from '../../components/Counter/Counter';


const store = createStore(combineReducers(
    {
        counterReducer: CounterReducer,
        filterReducer: FilterReducer
    })
);

export default store;