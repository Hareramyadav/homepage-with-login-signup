import React from 'react';
import classes from './Logo.module.css';
import motionLogo from '../../assets/images/motion-logo.jpg';
import {Link} from 'react-router-dom';

const logo =()=>(
    <div className={classes.Logo}>
        <Link to='/'>
         <img src={motionLogo} alt='logo'></img>
        </Link>
    </div>
);

export default logo;