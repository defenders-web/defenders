import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser, loginUser } from "../firebase";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Landing.css'

const Landing = () => { 
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleAuth = async (e) => {
      e.preventDefault();
      setError("");
        try {
            if (isRegistering) {
              if (!username) {
                setError("Username is required for registration.");
                return;
              }
              await registerUser(username, email, password);
            } else {
              await loginUser(email, password);
            }
            navigate("/home");
          } catch (error) {
            setError(error.message);
          }
    };

    return(
        
        <div className="auth-container">
            
            <h2 className="p-3 mb-2 bg-light text-dark rounded-3">{isRegistering ? "Sign Up" : "Log In"}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleAuth}>

      <div class="form-floating mb-3 user">
      
          <input className="form-control"
          id="floatingUsername"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
        
        <label for="floatingUsername">Username</label>
        </div>

        <div class="form-floating mb-3 ">
        <input className="form-control"
        id="floatingInput"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label for="floatingInput">Email address</label>
      </div>


      <div class="form-floating">
        <input className="form-control"
        id="floatingPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label for="floatingPassword">Password</label>
        </div>

        <div class="d-grid gap-2 col-15 mx-auto signup" >
        <button className="btn btn-primary btn-lg" type="submit">{isRegistering ? "Sign Up" : "Log In"}</button>
        </div>

      </form>

      <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-auth">
        <h6 className="p-3 mb-2 bg-white text-dark changebtn"> {isRegistering ? "Already have an account?" : "Don't have an account?"}</h6>
      </p>

        </div>
    );

}

export default Landing;