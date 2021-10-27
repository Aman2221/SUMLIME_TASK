import React, { useState } from 'react'
import Input from "@material-tailwind/react/Input";
import '../styles/RegisterPage.css'
import Button from "@material-tailwind/react/Button";
import userImg from '../img/userImg.png'
import { Link, useHistory } from "react-router-dom";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useStateValue } from '../StateProvider';

const RegisterPage = () => {

    const [{user}, dispatch] = useStateValue();

    const initialValues = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
        
        };

    const [showModal, setShowModal] = useState(false);
    const history = useHistory();
    const [values, setValues] = useState(initialValues);

    const handleInputValues = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    const handleSignup = (e) => {
       
        e.preventDefault();
        let pattern = /[0-9]/;
        let phoneNoPattern = /[a-zA-Z]/;
        let result = values.firstName.match(pattern) && values.lastName.match(pattern) && values.phone.match(phoneNoPattern); 
       
        if(!result && values.firstName && values.lastName && values.email && (values.password).length > 6 && values.phone){
            localStorage.setItem('email',values.email);
            localStorage.setItem('password',values.password);
            localStorage.setItem('firstName',values.firstName);
            localStorage.setItem('lastName',values.lastName);
            localStorage.setItem('phone',values.phone);
           
            history.push('/Login');  
            dispatch({
                type : 'SET_USER',
                user : true,
            })
        }
        else {
            setShowModal(true);
        }
        
    }
    return (
        <div className='registerPage'>
           <div className="registerPageDiv">
            <h1 className='registerHeading'>Register</h1>
            <form className='signUpFrom'>
            <div className="userDetailsDiv">
            <div className="userFormRightDiv">
                <div className="userImgDiv">
                    <img src={userImg} alt={userImg} />
                    <input type="file" name='userImg' id='userImg'/>
                    <label for="userImg">CHOOSE</label>
                     

                    <Modal size="sm" active={showModal} >
                        <ModalHeader toggler={(e) => {e.preventDefault();  setShowModal(false)}}>
                            Alert
                        </ModalHeader>
                        <ModalBody>
                            <p id='textAlertNormal' className="text-base leading-relaxed text-gray-600 font-normal">
                                First name and Last name should be string and Phone should be Number and length of password should be greater than  6<br/>
                                <span id='allFieldRequireMessage'>All fields are required</span>
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button 
                                color="red"
                                buttonType="link"
                                onClick={(e) => {e.preventDefault(); setShowModal(false); }}
                                ripple="dark"
                                
                            >
                                Close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
          
            <div className="userFormLeftDiv">
            
                <div className="userInputs">
                    <Input
                        type="text"
                        color="lightBlue"
                        size="regular"
                        outline={true}
                        placeholder="First Name"
                        value={values.firstName}
                        onChange = {handleInputValues}
                        name='firstName'
                        required
                    />
                </div>
                <div className="userInputs">
                    <Input
                        type="text"
                        color="lightBlue"
                        size="regular"
                        outline={true}
                        placeholder="Last Name"
                        value={values.lastName}
                        name='lastName'
                        onChange={handleInputValues}
                        required
                    />
                </div>
                <div className="userInputs">
                    <Input
                        type="text"
                        color="lightBlue"
                        size="regular"
                        outline={true}
                        placeholder="Email"
                        value={values.email}
                        name='email'
                        onChange={handleInputValues}
                        required
                    />
                </div>
                <div className="userInputs">
                    <Input
                        type="text"
                        color="lightBlue"
                        size="regular"
                        outline={true}
                        placeholder="Phone"
                        value={values.phone}
                        name='phone'
                        onChange={handleInputValues}
                        required
                    />
                </div>
                <div className="userInputs">
                
                </div>
                <div className="userInputs">
                    <Input
                        type="password"
                        color="lightBlue"
                        size="regular"
                        outline={true}
                        placeholder="Password"
                        value={values.password}
                        name='password'
                        onChange={handleInputValues}
                    />
                   
                </div> 
        </div>

        
        </div>
            <div className="SubmitSignupBtn">
            
                <Button
                    color="lightBlue"
                    buttonType="filled"
                    size="regular"
                    rounded={true}
                    block={false}
                    iconOnly={false}
                    ripple="light"
                    true='submit'
                    onClick={handleSignup}
                >
                   SignUp
                </Button>
            
            </div>
        
            </form>
           </div>
        </div>
    )
}

export default RegisterPage

