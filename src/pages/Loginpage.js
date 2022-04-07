import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

function Loginpage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const auth = getAuth();

  const Loginpage = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      <div style={{ 
        backgroundImage: `url("https://img.traveltriangle.com/blog/wp-content/uploads/2019/08/Indian-Restaurants-In-Japan.jpg")` 
      }}>
        
      </div>
      localStorage.setItem('currentUser' , JSON.stringify(result))
      setLoading(false);
      toast.success("Login successfull");
      window.location.href='/'

    } catch (error) {
      console.log(error);
      toast.error("Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="login-parent">
      {loading && <Loader />}
      <div className="login-top"></div>
      <div className="login-bottom"></div>
      <div className="row justify-content-centre">
        <div className="col-md-6">
          <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_gjmecwii.json" 
          background="transparent" speed="1" loop  ></lottie-player>
        </div>

        <div className="col-md-4 z1">
          <div className="login-top"></div>
          <div className="login-form">
            <h2>LOGIN</h2>

            <hr />

            <input
              type="text"
              className="form-control"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />



            <button className="my-3" onClick={Loginpage}>
              LOGIN
            </button>

            <hr />

            <Link to="/register" >Click Here To Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;