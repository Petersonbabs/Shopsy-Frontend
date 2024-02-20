import React, { useState } from 'react'
import { useAuthContext } from '../../context/authContext';
import styles from "./../../styles/signup.module.css";

const Signup = () => {
    const {registerUser} = useAuthContext();
    const [formDetails, setFormDetails] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const handleFormInput = (e) => {
        const { name, value } = e.target;
        setFormDetails(data => ({
            ...data,
            [name]: value
        }));
    }
    return (
        <div className={styles.signup}>
            <div className={styles.formGroup}>
                <label htmlFor="">First Name</label>
                <input type="text" placeholder='Enter firstname' name='firstname' value={formDetails.firstname} onChange={handleFormInput}/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder='Enter lastname' name='lastname' value={formDetails.lastname} onChange={handleFormInput}/>
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="">Email</label>
                <input type="email" placeholder='Enter email' name='email' value={formDetails.email} onChange={handleFormInput} />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Enter password' name='password' value={formDetails.password} onChange={handleFormInput} />
            </div>
            <div className="formGroup">
                <button className='btn full-btn green-btn' onClick={() => registerUser(formDetails)}>
                    Register
                </button>
            </div>
        </div>
    )
}

export default Signup