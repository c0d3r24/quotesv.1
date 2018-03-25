import React, { Component } from 'react';
import ajax from './../api/ajax';
import HomeView from './../components/HomeView';

class Home extends Component{

    state = {
        loadingCategories : true, 
        categories: []
    }
    async componentWillMount () {
        const categories = await ajax.fetchAllCategories();
        this.setState({
            loadingCategories: false,
            categories: categories
        });
    }

    render(){
        return(
           <HomeView />
        );
    }
}

export default Home;