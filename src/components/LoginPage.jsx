import React, { useState } from 'react'
import Input from "@material-tailwind/react/Input";
import '../styles/RegisterPage.css'
import Button from "@material-tailwind/react/Button";
import userImg from '../img/userImg.png'
import { useHistory } from "react-router-dom";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useStateValue } from '../StateProvider'
const LoginPage = () => {

    const [{user}] = useStateValue();
    const initialValues = {
        email: "",
        phone: "",
        password: "",
       
    };
    const [showModal, setShowModal] = React.useState(false);
    const history = useHistory();
    const [values, setValues] = useState(initialValues);

    const handleInputValues = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    }
    const handleLogin = (e) => {
        e.preventDefault();
      
       let userEmail = localStorage.getItem('email');
       let userPass = localStorage.getItem('password');

        if(userEmail == values.email && userPass == values.password){
            
            history.push('/Profile');
        }
        else {
            setShowModal(true);
        }
    
    }

    return (
        <div className="login_page">
             <div className='registerPage'>
           <div className="registerPageDiv">
            <h1 className='registerHeading'>Login</h1>
            <form className='signUpFrom'>
            <div className="userDetailsDiv">
            <div className="userFormRightDiv">
                <div className="userImgDiv">
                    <img src={userImg} alt={userImg} />
                    <input type="file" name='userImg' id='userImg'/>
                    <label for="userImg">CHOOSE</label>
                     

                    <Modal size="sm" active={showModal} toggler={() => setShowModal(false)}>
                        <ModalHeader toggler={() => setShowModal(false)}>
                            Alert
                        </ModalHeader>
                        <ModalBody>
                            <p id='textAlertNormal' className="text-base leading-relaxed text-gray-600 font-normal">
                                <br/>
                                <span id='allFieldRequireMessage'>Please fill details properly</span>
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button 
                                color="red"
                                buttonType="link"
                                onClick={(e) => { e.preventDefault(); setShowModal(false)}}
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
                        type="email"
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
                {
                    user ? (
                        <div className="dummyCreditsDiv userInputs">
                            <p><b>Email</b>&nbsp; <span>{localStorage.getItem('email')}</span></p>
                            <p><b>Password</b>&nbsp; <span>{localStorage.getItem('password')}</span></p>
                        </div>
                    ) : ('')
                }
                
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
                    onClick={handleLogin}
                >
                   Login
                </Button>
            </div>
        
            </form>
           </div>
        </div>
        </div>
    )
}

export default LoginPage
