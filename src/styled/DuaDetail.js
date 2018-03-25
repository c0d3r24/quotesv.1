import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import FaTwitterSquarefrom from 'react-icons/lib/fa/twitter-square';

import WebFont from 'webfontloader'
WebFont.load({
    google: {
        families: ['Ubuntu:300,400,700,bold','Comfortaa:300,400,700','sans-serif']
    }
});
export const Header = styled.header`
    text-align : center,
    font-size: 2em;
    font-family: 'Roboto', sans-serif;
`
export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: auto; 
   width: 60%;
   min-height: 80vh;
   margin-top: 50px;
   font-size: 20px;
   font-family: 'Ubuntu', sans-serif;
   //border: 2px solid #5e35b1 ;
   border-radius: 5px;
  ${
      media.handheld`
      width:100%;`
  }
`


function Dua(props){
     console.log(props.quoteDetail);
     const quote = props.quoteDetail;
    return(
        <div style={{
                width:"80%", 
                color: "#000",
                borderWidth: 2,
                borderBottom:"2px solid #00897b",
                marginTop: 2,
                lineHeight: 1.5,
                  }}>
            <p style={{ 
                fontSize: "20px",
                }}>
            {quote.quote_text.trim()}</p>
            <p
            style={{ 
                fontSize: "15px",
                textAlign: "right"}}
            >- {quote.quote_author}</p>
            <div style={{textAlign: "right"}} >
                <FaFacebookSquare 
                    style={{fontSize: 25, color: "#00897b"}}
                />
                <FaGooglePlus 
                    style={{fontSize: 25, color: "#00897b"}}
                />
                <FaTwitterSquarefrom 
                    style={{fontSize: 25, color: "#00897b"}}
                />
            </div>
        </div>
    )   
}

export const Main = (props) => {
    return (
        <Container>{
            Object.keys(props.quoteDetail).map((key) => {
                return <Dua 
                            key={key} 
                            quoteDetail={props.quoteDetail[key]} 
                            />
            })}</Container>
        
    )
}