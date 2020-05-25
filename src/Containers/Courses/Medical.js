import React, { Component } from "react";
import Questions from '../../Components/ExamModal/Modal/Questions/Questions';
import axios from '../../axios';

class Medical extends Component{
    state={
        loginDetail:[]
    }

    componentDidMount(){
        axios.get('/login.json')
            .then(response=>{
               const fetchedDetail=[];
               for(let key in response.data){
                   fetchedDetail.push({
                       ...response.data[key],
                       id:[key]
                   })
               }
               this.setState({loginDetail:fetchedDetail});
            })
            .catch(error=>{
                console.log(error)
            })
    }

    render(){
        return(
            <div>
                {this.state.loginDetail.map(detl=>
                    <Questions key={detl.id}
                        stsDetails={detl.stsDetails}/>
                )}
            </div>
        );
    }
}

export default Medical;