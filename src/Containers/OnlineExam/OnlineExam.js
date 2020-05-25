import React, { Component } from "react";
import HomeBanner from '../../Components/Banner/HomeBanner/HomeBanner';
import ExamModal from '../../Components/ExamModal/ExamModal';
import Footer from '../../Components/Footer/Footer';



class OnlineExam extends Component{
    render(){
        return(
            <React.Fragment>
                <HomeBanner/>
                <ExamModal/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default OnlineExam;