import React, { Component } from 'react';
import ajax from '../api/ajax';
import {renderInitialView} from './../utils/helper';

class Inspiration extends Component{
    state = {
        loadingQuotes : true,
        quotesDetails:[]
    }
    async componentWillMount(){
        const quotes =  await ajax.fetchQuotesForCategory(1)
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

export default Inspiration;