import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './logInPage.css';

const LogInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <body>
    <div className="container">
      <form>
        <h2>Log in</h2>

        <div className="input-group">
          <input
            required
            type="text"
            name="text"
            autoComplete="off"
            className="input"
          />
          <label className="user-label">Username</label>
        </div>

        <div className="input-group">
          <input
            required
            type={showPassword ? 'text' : 'password'}
            name="password"
            autoComplete="off"
            className="input"
          />
          <label className="user-label">Password</label>
          <span
  className={`toggle-password ${showPassword ? 'active' : ''}`}
  onClick={togglePasswordVisibility}
>
  {showPassword ? <FaEyeSlash /> : <FaEye />}
</span>

        </div>

        <button class="sub" type="submit">SIGN IN</button>
        <button class="sub" type="submit">VIEW SEAT PLAN</button>
        <a href="#">Need Help?</a>
      </form>
    </div>
    </body>
  );
};

export default LogInPage;
