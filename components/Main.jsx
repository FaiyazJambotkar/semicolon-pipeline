import { Typography } from '@mui/material'
import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Main.css'
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isregistered, setisregistered] = useState(false);

  const navigate = useNavigate();

  // useEffect(()=> {
  //   const storedLoggedInInfo = localStorage.getItem('isLoggedIn')
  //   if(storedLoggedInInfo === '1'){
  //     setIsLoggedIn(true)
  //     console.log('user already logged in')
  //   }
  // },[])

  const clickHandler = () => {
    setisregistered(!isregistered);
  };

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const logoutHandler = (email, password) => {
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn && navigate("/home")}

      {!isLoggedIn && (
        <div className="MainContainer">
          <div className="form">
            {!isregistered && <LoginForm />}
            {isregistered && <SignupForm></SignupForm>}

            <Typography sx={{ cursor: "pointer" }}>
              <span onClick={clickHandler}>
                {!isregistered
                  ? " Dont have an account? Sign Up"
                  : "Have an account? Login "}
              </span>
            </Typography>
          </div>

          <div className="image">
            <h1 className="semi">Semi</h1>
            <h1 className="colon">Colon</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Main


 