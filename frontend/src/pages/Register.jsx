import {  useEffect,useState } from "react"
import { FaUser } from "react-icons/fa";

const Register = () => {
     const [formdata,setFormdata ] = useState({
         name:'',
         email:'',
         password1:'',
         password2:''
     })
     const {name,email,password1,password2} = formdata;
     const onChange = (e) => {
       setFormdata((prevState) => ({
         ...prevState,
        [e.target.name]: e.target.value,}))
     };
    //const onChange = () => {};

    const onSubmit = (e) => {
      e.preventDefault()
    };
  return (
    <>
    <section className="heading">
        <h1>
            <FaUser /> Register
        </h1>
        <p>please register</p>
    </section>
    <section className='form'>
      <form onSubmit={onSubmit}>
      <div className="form-group">
        <input type='text'
        className="form-control"
        id="name"
        name="name"
        value={name}
        placeholder="enter your name"
        onChange={onChange}
        />
        </div>
      
      
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
        <input type='password'
        className="form-control"
        id="password2"
        name="password2"
        value={password2}
        placeholder="enter second password"
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

export default Register