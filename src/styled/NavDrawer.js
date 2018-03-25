import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import styled from 'styled-components';


const StayVisible = styled.div`
    position: absolute;
    right:2px;
    margin-right: ${(props) => (props.open) ? `${props.width}px`:'none'};
    transition: margin .5s,
    
`
export const NavToggleButton = (props) =>{
    return (
        <StayVisible 
            {...props}
         >
            <FloatingActionButton
            // style={{backgroundColor: "black", color: "red"}}
            backgroundColor={"#00897b"}
            onTouchTap={props.toggle}>
                <Menu 
                />
            </FloatingActionButton>
        </StayVisible>
    )
}