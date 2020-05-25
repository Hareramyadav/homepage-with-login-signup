import React, { Component } from "react";
import classes from './SignInForm.module.css';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import Toolbar from '../../../Components/Navigation/Toolbar/Toolbar';
import axios from '../../../axios';

class SignInForm extends Component{

    state={
        signInForm:{
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your mail Id please!!!'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Your Password Please!!!'
                },
                value:'',
                validation:{
                    required:true,
                },
                valid:false,
                touched:false
            }
        },
        formIsValid:false
    }

    singUpClickedHandler=()=>{
        this.props.history.replace('/register');
    }

    signInValeHandler=(event)=>{
        event.preventDefault();
        const formData={};
        for (let signInformInputIdentifier in this.state.signInForm){
            formData[signInformInputIdentifier]=this.state.signInForm[signInformInputIdentifier].value;
        }

        const details={
            stsDetails:formData
        }
        axios.post('/login.json', details)
            .then(response=>{
                console.log(response);
                this.props.history.push('/');
            })
            .catch(error=>{
                console.log(error);
            })
    }

    checkValidity(value, rules){
        let isValid=true;
        if(rules.required){
            isValid= value.trim() !== '' && isValid
        }
        return isValid;
    }

    formValueHandler=(event, inputIdentifier)=>{
        console.log(event.target.value);
        const updatedSingInForm={
            ...this.state.signInForm
        };
        const updatedFormElement={
            ...updatedSingInForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedSingInForm[inputIdentifier]=updatedFormElement;

        updatedFormElement.valid=this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched=true;
        
        let formIsValid=true;
        for(let inputIdentifier in updatedSingInForm){
            formIsValid=updatedSingInForm[inputIdentifier].valid && formIsValid
        }

        this.setState({signInForm : updatedSingInForm, formIsValid:formIsValid}); 
    }

    render(){
        const signInElementArray=[];
        for (let key in this.state.signInForm){
            signInElementArray.push({
                id:key,
                config:this.state.signInForm[key]
            })
        }

        let form =(
            <form onSubmit={this.signInValeHandler}>
                    {signInElementArray.map(signInElement=>
                        <Input 
                            key={signInElement.id}
                            elementType={signInElement.config.elementType}
                            elementConfig={signInElement.config.elementConfig}
                            value={signInElement.config.value}
                            invalid={!signInElement.config.valid}
                            touched={signInElement.config.touched}
                            changed={(event)=>this.formValueHandler(event, signInElement.id)}/>
                    )}
                    <Button btnType="Success" disabled={!this.state.formIsValid}>Sign In</Button>
                    <Button btnType='Success' clicked={this.singUpClickedHandler}>Register</Button>
                </form>
        )

        return(
            <div className={classes.SingInForm}>
                <Toolbar/>
                <h1>Go For It</h1>
                {form}
            </div>
        );
    }
}

export default SignInForm;