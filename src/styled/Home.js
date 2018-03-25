// import React from 'react';
// import styled from 'styled-components';
// import {media} from '../utils/media';
// import WebFont from 'webfontloader';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import {Link} from 'react-router';

// WebFont.load({
//     google: {
//         families: ['Ubuntu:300,400,700,bold','Actor:300,400,700','sans-serif']
//     }
// });
// export const Container = styled.div`
//    display: flex;
//    flex-direction: column;
//    align-items: center;
//    margin: auto; 
//    widht: 80%;
//    min-height: 80vh;
//   ${
//       media.handheld`
//       width:100%;`
//   }
// `

// function Category(props){
//     return(
//               <Link to={'/'+props.category.category_id}>
//                      <Card>
//                         <CardMedia>
//                             <img src={require('./../assets/images/'+ props.category.name)} alt={props.category.name} />     
//                         </CardMedia>
//                      </Card>
                      
//               </Link>);
// }
// function categoryLoading(props) {
//     return (props.loadingCategories) ?
//         <div><p>Loading.....</p></div>
//         : 
//         [
//             Object.keys(props.categories).map((key) => {
//                 return <Category 
//                             key={key} 
//                             category={props.categories[key]} 
//                         />
//             })]
//     }

// export const Main = (props) => {
//     return (
//         <Container> 
//             {categoryLoading(props)}
//         </Container>
//     )
// }