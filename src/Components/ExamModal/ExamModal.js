import React, { Component } from 'react';
import classes from './ExamModal.module.css';
import Modal from '../ExamModal/Modal/Modal';
import Button from '../../UI/Button/Button';
import {Link} from 'react-router-dom';
//import axios from 'axios';


class ExamModal extends Component{

    render(){
        return(
            <section className={classes.ExamModal}>
                <Modal >
                    <h1>Medical</h1>
                    <Link to='/login'><Button btnType='Info' link='/login'>Move to Exam</Button></Link>
                </Modal>
                
                <Modal>
                    <h1>Paramedical/Allied science</h1>
                    <Button btnType='Info'>Move to Exam</Button>
                </Modal>
                <Modal>
                    <h1>General IQ</h1>
                    <Button btnType='Info'>Move to Exam</Button>
                </Modal>
            </section>
        );
    }
}

export default ExamModal;