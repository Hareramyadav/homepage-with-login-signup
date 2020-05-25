import React, { Component } from "react";
import classes from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';

class Layout extends Component{

    state={
        showSideDrawer:false
    }

    closeSideDraweraHandler=()=>{
        this.setState({showSideDrawer:false})
    }

    openSideDrawerMenuHandler=(prevState)=>{
        return this.setState({showSideDrawer:!prevState.showSideDrawer})
    }

    render(){
        return(
            <React.Fragment>
                <Toolbar openMenu={this.openSideDrawerMenuHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    close={this.closeSideDraweraHandler}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;