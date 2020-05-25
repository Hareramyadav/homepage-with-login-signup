import React from 'react';
import classes from './NavigationItems.module.css';
import Navigationitem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems=()=>(
    <div className={classes.NavigationItems}>
        <Navigationitem link='/'>Home</Navigationitem>
        <Navigationitem link='/'>AboutUs</Navigationitem>
        <Navigationitem link='/register'>Login|SignUp</Navigationitem>
    </div>
);

export default navigationItems;