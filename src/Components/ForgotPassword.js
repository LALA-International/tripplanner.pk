import React, { useState, useEffect } from "react";
import '../Components/tripplanner.css';
import '../Components/styles.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const UserLogin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Forget Pasword | Tripplanner ";

  }, []);
  const key = "UXVpUGVja0BBUElAS0VZQEZPUkBEQVRBQE1JTklORzkxNTY2";
  const domain = "tripplanner.ae";

  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const [msg, setMsg] = useState('');

  const [incorrect, setIncorrect] = useState(false);

  let navigate = useNavigate();

  const header = new Headers({ "Access-Control-Allow-Origin": "*" });



  const user = { domain, email };

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      mode: 'no-cors',
    }
  };

  const submit = (e) => {
    e.preventDefault();

    fetch('https://api.tripplanner.ae/web/forget-password', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
      },
      body: JSON.stringify(user)
    }).then(async response => {
      if (!response.ok) {
        const validation = await response.json();
        setMsg(validation.errors);
        setIncorrect(true);
      }
      else {

        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
        console.log(response.json());

        navigate('/User-login');
      }
    });
  }
  return (
    <div>

      <div id="user-registration-page">

        <div className="user-regist p-5">

          <form >
            <div className="logo-main text-center pt-2">
              <Link to="/"><img className="" src="assets/img/user-registration-logo.png" /></Link>
            </div>
            {incorrect &&
              <div className="row">
                <div className="col-sm-12 text-center error-msg">
                  <span>Your Email or password is Incorrect</span>
                </div>
              </div>
            }
            <div className="row mt-4">
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-4">
                <input type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email *"
                  onChange={(e) => setUserEmail(e.target.value)}
                  required />
              </div>

              <div className="col-lg-12 col-md-12 col-12">
                <div className="login-btn mt-3">
                  <div className=""><button onClick={submit} className="w-100">Submit</button></div>
                </div>

              </div>
            </div>
          </form>
        </div>

      </div>

    </div>
  )
}

export default UserLogin;