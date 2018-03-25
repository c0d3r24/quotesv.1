import React, {Component} from 'react'
import ajax from './../api/ajax';
import {Link} from 'react-router';
import WebFont from 'webfontloader';
import styled from 'styled-components';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

WebFont.load({
    google: {
        families: ['Ubuntu:300,400,700,bold','Comfortaa:300,400,700','sans-serif']
    }
});
function Category(props){
    return(
              <Link to={'/'+props.category.category_id}
                style={styles.links}
                >
                       <Card>
                        <CardMedia>
                            <img src={require('./../assets/images/'+ props.category.name+'.png')} alt={props.category.name} />     
                        </CardMedia>
                        <CardTitle subtitle={props.category.name}></CardTitle>
                     </Card>
              </Link>);
}
class HomeView extends Component {

    state={
        categories: [],
        loadingCategories: true,
    }
    
    async componentWillMount(){
        const cat =  await ajax.fetchAllCategories().then()
        console.log(cat);
        this.setState({
            categories: cat,
            loadingCategories: false
        });  
    }
    
    categoryLoading(){
        return (this.state.loadingCategories) ?
            <div><p>Loading.....</p></div>
            : 
            [
                Object.keys(this.state.categories).map((key) => {
                    return <Category 
                                key={key} 
                                category={this.state.categories[key]} 
                                toggle={this.toggle}
                                />
                })]
    }
    render(){
        return(
            <div style={{
            width: "70%",
            display: "flex",
            flexWrap:'wrap',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: "50px",}}>
               {this.categoryLoading()}
            </div>
        );
    }

}


const styles = {
    
    links:{
        textDecoration: 'none',
        color: '#004D40',
        fontFamily:'Ubuntu',
        textTransform: 'capitalize',
        width: "40%",
        margin: "10px"
    }
    
}
export default HomeView;