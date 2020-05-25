import React from 'react';
import classes from './MainFooter.module.css';

const mainFooter = (props) =>(
    <section className={classes.MainFooter}>{props.children}</section>
);

export default mainFooter;