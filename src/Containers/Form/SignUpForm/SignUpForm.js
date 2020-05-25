import React, { Component } from "react";
import classes from './SignUpForm.module.css';
import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';
import axios from '../../../axios';
import Toolbar from '../../../Components/Navigation/Toolbar/Toolbar';

class SignUpForm  extends Component{
    
    state={
        signUpForm:{
            firstName:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'First Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            lastName:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'Last Name'
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder:'Your Email Please!'
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
                    type:'textarea',
                    placeholder:'password'
                },
                value:'',
                validation:{
                    required:true,
                    minlength:8
                },
                valid:false,
                touched:false
            },
            confirmPassword:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder:'confirm password'
                },
                value:'',
                validation:{
                    required:true,
                    minlength:8
                },
                valid:false,
                touched:false
            }

        },
        formIsValid:false
    }

    signInClickedHandler=()=>{
        this.props.history.replace('/sign-in');
    }

    signUpValueChangedHandler=(event)=>{
        event.preventDefault();
        const formData={};
        for (let signUpInputIdentifiers in this.state.signUpForm){
            formData[signUpInputIdentifiers]=this.state.signUpForm[signUpInputIdentifiers].value;
        }
        const details={
            stsDetails: formData
        }
        axios.post('/registrations.json', details)
            .then(response=>{
                console.log(response);
                this.props.history.push('/');
            })
            .catch(error=>{
                console.log(error);
            });
    }

    checkValidity(value, rules){
        let isValid=true;
        if(rules.required){
            isValid=value.trim() !=='' && isValid
        }
        if(rules.minlength){
            isValid=value.length>= rules.minlength && isValid
        }
        return isValid;
    }

    formValueHandler=(event, inputIdentifer)=>{
        const updatedSignUpForm={
            ...this.state.signUpForm
        }
        const updatedFormElement={
            ...updatedSignUpForm[inputIdentifer]
        }
        updatedFormElement.value = event.target.value;
        updatedSignUpForm[inputIdentifer]=updatedFormElement;

        updatedFormElement.valid=this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched=true;

        let formIsValid=true;
        for(let inputIdentifer in updatedSignUpForm){
            formIsValid=updatedSignUpForm[inputIdentifer].valid && formIsValid
        }

        this.setState({signUpForm:updatedSignUpForm, formIsValid:formIsValid})
    };

    render(){
        const formElementsArray = [];
        for(let key in this.state.signUpForm){
            formElementsArray.push({
                id: key,
                config:this.state.signUpForm[key]
            });
        };

        let form = (
                <form onSubmit={this.signUpValueChangedHandler}>
                    {formElementsArray.map(signUpElement=>
                        <Input 
                            key={signUpElement.id}
                            elementType={signUpElement.config.elementType}
                            elementConfig={signUpElement.config.elementConfig}
                            value={signUpElement.config.value}
                            invalid={!signUpElement.config.valid}
                            touched={signUpElement.config.touched}
                            changed={(event)=>this.formValueHandler(event, signUpElement.id)}/>
                    )}
                    <Button btnType='Success' clicked={this.signInClickedHandler}>Sign In</Button>
                    <Button btnType='Success' disabled={!this.state.formIsValid}>Register</Button>       
                </form>
        )

        return(
            <React.Fragment>
                <Toolbar/>
            <div className={classes.SignUpForm}>
                <h1>Register, If not loggedIn</h1>
                {form}
            </div>
            </React.Fragment>
        );
    }
}

export default SignUpForm;