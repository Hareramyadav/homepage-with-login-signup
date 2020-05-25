import React from 'react';
import classes from './Footer.module.css';
import MainFooter from './MainFooter/MainFooter';
import Copyright from './Copyright/Copyright';

const footer = () =>(
    <React.Fragment>
        <footer className={classes.Footer}>
            <MainFooter>
                <address>
                    <h4>CONTACT US</h4>
                    <p><strong>Address:</strong>
                        <br/>Bank Road, Bagbazar, Kathmandu</p>
                    <p><strong>Phone: </strong>
                        <a href='tel:+977 14265936'>+977 14265936</a></p>
                    <a href='mailto:entrancemotion@gmail.com'><strong>E-mail: </strong>entrancemotion@gmail.com</a>
                </address>
            </MainFooter>
            <MainFooter>
                <address>
                    <h4>ABOUT US</h4>
                    <ul>
                        <li><a href='/'>Achievement</a></li>
                        <li><a href='/'>About Motion</a></li>
                        <li><a href='/'>Contact Us</a></li>
                        <li><a href='/'>Gallery</a></li> 
                    </ul>
                </address>
            </MainFooter>
            <MainFooter>
                <h4>STUDENT ZONE</h4>
            </MainFooter>
            <MainFooter>
                <h4>SUBSCRIBE US</h4>
            </MainFooter>
        </footer>
        <footer>
            <Copyright/>
        </footer>
    </React.Fragment>
);

export default footer;