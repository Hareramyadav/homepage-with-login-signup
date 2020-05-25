import React from 'react';
import classes from './HomeBanner.module.css';
import Button from '../../../UI/Button/Button';

const homeBanner=()=>(
    <section className={classes.HomeBanner}>
        <h1>Motion<br/>
            Welcomes You in the Future of Reading
        </h1>
        <Button btnType='Info'>Let's Move</Button>
    </section>
);

export default homeBanner;