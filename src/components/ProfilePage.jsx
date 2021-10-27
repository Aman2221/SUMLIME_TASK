import React from 'react'
import { useHistory } from "react-router-dom";
import userImg from '../img/userImg.png'
import Button from "@material-tailwind/react/Button";

const ProfilePage = () => {
   
    const history = useHistory();

    return (
        <div className='profilePage'>
           <div className="login_page">
             <div className='registerPage'>
           <div className="registerPageDiv">
            <h1 className='registerHeading'>Profile</h1>
            <form className='signUpFrom'>
            <div className="userDetailsDiv">
            <div className="userFormRightDiv">
                <div className="userImgDiv">
                    <img src={userImg} alt={userImg} />
                    <input type="file" name='userImg' id='userImg'/>
                    <label for="userImg">UPLOAD</label>
                </div>
            </div>
          
            <div className="userFormLeftDiv">
                 <div className="dummyCreditsDiv userInputs">
                    <p><b>FName</b>&nbsp; <span>{localStorage.getItem('firstName')}</span></p>
                    <p><b>LName</b>&nbsp; <span>{localStorage.getItem('lastName')}</span></p>
                    <p><b>Phone</b>&nbsp; <span>{localStorage.getItem('phone')}</span></p>
                    <p><b>Email</b>&nbsp; <span>{localStorage.getItem('email')}</span></p>
                    <p><b>Password</b>&nbsp; <span>{localStorage.getItem('password')}</span></p>
                    
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
                    onClick={() => history.push('/') }
                >
                   Update
                </Button>
            </div>
        
            </form>
           </div>
        </div>
        </div>  
        </div>
    )
}

export default ProfilePage

