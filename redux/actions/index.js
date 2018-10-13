export const UPDATE_LOCALE = 'UPDATE_LOCALE';

export function updateLocale(locale) {
    
    return (dispatch) => {
 
        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        dispatch({type: UPDATE_LOCALE, locale: locale});
 
    };
}