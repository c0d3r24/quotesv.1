import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NavDrawer from './../components/NavDrawer';
import { Header, Main } from '../styled/Template';

injectTapEventPlugin();


class Template extends Component{
 
    state = {
        categories : 1
    }
    render(){
        return(
            <MuiThemeProvider>
                <div> 
                <NavDrawer />
                <Header>
                    YAKTABIS
                </Header>
                <Main category={this.state.categories}>
                    {this.props.children}
                </Main>
            </div>
            </MuiThemeProvider>
            
        );
    }
}

export default Template;