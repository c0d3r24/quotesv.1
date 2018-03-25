import React from 'react';
import {Main} from './../styled/DuaDetail';

export const renderInitialView = (loadingQuotes, quoteDetail) => {
    if(loadingQuotes){
        return <div><p>Loading.......</p></div>
    }
    else{
        return <Main quoteDetail={quoteDetail} />
    }
}
