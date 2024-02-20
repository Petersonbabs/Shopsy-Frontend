import React, { useState } from 'react';
import { useAuthContext } from '../../context/authContext';
import styles from "./../../styles/signin.module.css";

const SignIn = () => {
    const {handleSignIn} = useAuthContext();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    // input login details
    const handleLoginInputs = (e) => {
        const {name, value} = e.target;
        setFormData((data) => ({
            ...data,
            [name] : value
        }))
    }

    return (
        <div>
            <div className={styles.signinform}>
                <div className={styles.formGroup}>
                    <input type="email" placeholder='Email' onChange={handleLoginInputs} name='email' value={formData.email}/>

                    <input type="password" placeholder='Password' onChange={handleLoginInputs} name='password' value={formData.password}/>
                    <button onClick={() => handleSignIn(formData)} className='btn full-btn green-btn'>Sign In</button>
                    <p id='signInError'></p>
                </div>
            </div>
        </div>
    )
}

export default SignIn