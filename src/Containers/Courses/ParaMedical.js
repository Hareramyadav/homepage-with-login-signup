import React, { Component } from "react";
import classes from './Courses.module.css';
import Button from '../../UI/Button/Button';
import Modal from '../../Components/ExamModal/Modal/Modal';

class ParaMedical extends Component{
    render(){
        return(
            <div className={classes.Courses}>
                <Modal>
                    <h1>Paramedical/Allied science</h1>
                    <Button btnType='Info'>Move to Exam</Button>
                </Modal>
            </div>
        );
    }
}

export default ParaMedical;