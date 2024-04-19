import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/login.scss'
import { useState } from 'react'
import { useFirebase } from '../context/Firebase'

const SignUp = () => {
    const firebase = useFirebase();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [Conpassword, setConpassword] = useState('');

    const loginWithGoogle = ()=>{
      firebase.signinWithGoogle();
    }

    const  submit = ()=>{
      const email_val= email;
      const password_val= password;
      const conpassword_val= Conpassword;
      if(password_val.length>=6){
        if(password_val!=conpassword_val){
          alert('password must be same in both field')
        }
        else{
          firebase.CreateUserWithEmailAndPassword(email_val,password_val);
        }
      }else{
        alert('length of the password must be atleast 6 ')
      }
    }
  return (
    <>
    <div className="login-bg-image"></div>
    <div className="login-container">
      <h1>SignUp</h1>
      <div className="form-component">
        <div className="login-inputs">
          <label htmlFor="email">Username:</label>
          <input
            autoComplete='on'
            placeholder='Enter your email'
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail((val)=>val=e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            autoComplete='on'
            placeholder='Enter your Password'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword((val)=>val=e.target.value)}
            required
          />
          <label htmlFor="Confirmpassword">Confirm password:</label>
          <input
            autoComplete='on'
            placeholder='Confirm Password'
            type="password"
            id="Confirmpassword"
            name="Confirmpassword"
            value={Conpassword}
            onChange={(e) => setConpassword((val)=>val=e.target.value)}
            required
          />
        </div>
        <Link to={'/'}>Login</Link>
        <Link to={'/'}><button onClick={submit}>Sign up</button></Link>
        <Link to={'/'}><button onClick={loginWithGoogle}>Continue with Google</button></Link>
        </div>
    </div>
    </>
  )
}

export default SignUp