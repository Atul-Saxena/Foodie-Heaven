import { Link } from 'react-router-dom';
import './stylesheets/login.scss'
import { useState } from 'react'
import { useFirebase } from '../context/Firebase';

const Login = () => {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');

  const firebase = useFirebase();

  const LoginFunc = ()=>{
    const email_val= email;
    const password_val= password;
    firebase.SignInWithEmailAndPassword(email_val,password_val)
  }

  const loginWithGoogle = ()=>{
    firebase.signinWithGoogle();
  }

  return (
    <>
    <div className="login-bg-image"></div>
    <div className="login-container">
      <h1>Login</h1>
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
            onChange={(e) => setemail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        <Link to={'/signin'}>Create account?</Link>
        <Link to={'/'}><button onClick={LoginFunc}>Login</button></Link>
        <button onClick={loginWithGoogle}>Continue with Google</button>
      </div>
    </div>
    </>
  );
}

export default Login