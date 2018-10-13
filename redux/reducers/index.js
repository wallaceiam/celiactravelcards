import { combineReducers } from 'redux';
import { AsyncStorage } from "react-native"

import { strings, setLocale, getCurrentLocale } from '../../utils/language';
import { UPDATE_LOCALE } from '../actions';

let localeState = { locale: 'en', recentLocales: [] };

const localeReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_LOCALE:
            let persistedRecentLocales = [];
            recentLocales = state.recentLocales ? JSON.parse(JSON.stringify(state.recentLocales)) : persistedRecentLocales;
            if (action.locale !== undefined && action.locale !== getCurrentLocale()) {
                setLocale(action.locale);
                if (recentLocales) {
                    if (!recentLocales.includes(action.locale)) {
                        recentLocales.push(action.locale);
                    }
                    while (recentLocales.length > 5) {
                        recentLocales.shift();
                    }
                } else {
                    recentLocales = [action.locale];
                }
            }
            state = Object.assign({}, state, { locale: action.locale, recentLocales });
            AsyncStorage.setItem('@GFTravel:recentLocales', JSON.stringify(state.recentLocales));
            return state;
        default:
            return localeState;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({
    localeReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;