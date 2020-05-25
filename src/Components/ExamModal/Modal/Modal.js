import React from 'react';
import classes from './Modal.module.css';

const modal =(props)=>(
    <section className={classes.Modal}>{props.children}</section>
);

export default modal;