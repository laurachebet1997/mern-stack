import {  useEffect,useState } from "react"
import { FaSignInAlt, FaUser } from "react-icons/fa";

const Login = () => {
     const [formdata,setformdata ] = useState({
         email:'',
         password1:'',
     })
     const {email,password1} = formdata;
     const onChange = (e) => {
       setformdata((prevState) => ({
         ...prevState,
         [e.target.name]: e.target.value,}))
     };

    const onSubmit = (e) => {
      e.preventDefault()
    };
  return (
    <>
    <section className="heading">
        <h1>
            <FaSignInAlt /> Register
        </h1>
        <p>Login and start setting goals</p>
    </section>
    <section className='form'>
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type='email'
        className="form-control"
        id="email"
        name="email"
        value={email}
        placeholder="enter your email"
        onChange={onChange}
        />
        </div>
      
      <div className="form-group">
        <input type='password'
        className="form-control"
        id="password1"
        name="password1"
        value={password1}
        placeholder="enter password"
        onChange={onChange}
        />
        </div>
        <div className="form-group">
        <button type='submit' classname='btn-btn-block'>submit</button>
        </div>
      </form>
      
    </section>
    </>
  )
}

export default Login