import React, { useState, useEffect } from "react";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CaptchaTest from "./CaptchaTest";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha
} from "react-simple-captcha";



const UserLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sign In | Tripplanner ";
    
    setIncorrect(false);
  }, []);


  const key = "UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
  const domain = "tripplanner.ae";

  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const [msg, setMsg] = useState('');

  const [incorrect, setIncorrect] = useState(false);

  let navigate = useNavigate();

  const header = new Headers({ "Access-Control-Allow-Origin": "*" });

  const user = { key, domain, email, password };

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  };

  const signIn = (e) => {
    e.preventDefault();
    let user_captcha = document.getElementById("user_captcha_input").value;
    console.log('user_captcha: ', user_captcha);

    if (validateCaptcha(user_captcha) == false) {
      alert("Captcha Does Not Match");
      document.getElementById("user_captcha_input").value = "";
      return;
    }

    axios.post('https://panel.umrahfuras.com/test_data.php', user, axiosConfig)
      .then((response) => {
        console.log("response: ", response);

        if (response.data.status === 'fail') {
          console.log("if block");
          setMsg(response.data.message);
          setIncorrect(true);
          alert(response.data.message);
        }
        else {
          console.log("else block");
          localStorage.setItem('user', JSON.stringify(user));
          console.log(user);
          navigate('/');
        }
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
  }
  return (
    <div>

      <div id="user-registration-page">

        <div className="login-screen user-regist p-5">

          <form onSubmit={signIn}>
            <div className="logo-main text-center pt-2">
              <Link to="/"><img className="" src="../../assets/img/user-registration-logo.png" /></Link>
            </div>
            {incorrect &&
              <div className="row">
                <div className="col-sm-12 text-center error-msg">
                  <span>Your Email or password is Incorrect</span>
                </div>
              </div>
            }
            <div className="row mt-4">
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                <input type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email *"
                  onChange={(e) => setUserEmail(e.target.value)}
                  required />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                <input type="text"
                  name="password"
                  className="form-control"
                  placeholder="Password *"
                  onChange={(e) => setUserPassword(e.target.value)}
                  required />
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                {/*<input type="text" name="" className="form-control" placeholder="Kindly write red text as above *" />*/}
                <CaptchaTest />
              </div>
              <div className="col-lg-12 col-md-12 col-12">
                <label className="gen-text pt-3 mb-2"><Link to="/user-registration">Register As Customer?</Link></label>
                <label className="gen-text pt-3 mb-2 float-right"><Link to="/agent-login">Register As Agent?</Link></label>
                <div className="login-btn ">
                  <div className="">
                    <button className="w-100">Login</button>
                  </div>
                </div>
                <label className="gen-text pt-3 mb-2"><Link to="/forgot-password">Forgot Password?</Link></label>
              </div>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default UserLogin;