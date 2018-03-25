import React, { Component } from 'react';
import {renderInitialView} from './../utils/helper';
import ajax from './../api/ajax';
class Motivation extends Component{

    state = {
        loadingQuotes : true,
        quotesDetails:[]
    }
    async componentWillMount(){
        const quotes =  await ajax.fetchQuotesForCategory(4)
        this.setState({
            loadingQuotes: false,
            quotesDetails : quotes
        });
    }
    

    render(){
        return(
            <div> 
                {renderInitialView(this.loadingQuotes,this.state.quotesDetails)}
            </div>
        );
    }
}

export default Motivation;