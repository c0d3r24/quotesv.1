import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/media';
import WebFont from 'webfontloader'

WebFont.load({
    google: {
        families: ['Ubuntu:300,400,700,bold','Actor:300,400,700','sans-serif']
    }
});

export const Header = styled.header`
    text-align : center,
    font-size: 2em;
    //font-family: 'Roboto', sans-serif;
    font-family: 'Actor', sans-serif;
    color: #004D40;
`
export const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: auto; 
   widht: 80%;
   min-height: 80vh;
  ${
      media.handheld`
      width:100%;`
  }
`


export const Main = (props) => {
    return (
        <Container> 
            {props.children}
        </Container>
    )
}