import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../Navigation/NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer=(props)=>{
    let hideSideDrawer=[classes.SideDrawer, classes.Close];
    if(props.open){
        hideSideDrawer=[classes.SideDrawer, classes.Open]
    }
    return(
        <React.Fragment>
            <Backdrop show={props.open} removeBackdrop={props.close}/>
            <div className={hideSideDrawer.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </React.Fragment>
    );
    
};

export default sideDrawer;