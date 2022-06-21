import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

export type UserInfoType = {
  email: string;
  password: string;
  name: string;
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    navigate("/main");
  };

  const onSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();

    const res = await axios.get("/users");
    const usersInfo = res.data;

    const registedEmails = usersInfo.map(
      (userInfo: UserInfoType) => userInfo.email
    );
    const matchEmail = registedEmails.find(
      (registedemail: string) => registedemail === email
    );
    const registedPasswords = usersInfo.map(
      (userInfo: UserInfoType) => userInfo.password
    );
    const matchPassword = registedPasswords.find(
      (registedPasswords: string) => registedPasswords === password
    );

    if (matchEmail !== undefined) {
      if (matchPassword !== undefined) {
        return login();
      } else {
        alert("패스워드가 맞지 않습니다");
      }
    } else {
      alert("Failed to login");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2>Log-in</h2>
        <form className="login-form">
          <div className="login-id">
            <h4>E-mail</h4>
            <input
              type="text"
              placeholder="아이디 또는 이메일"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>
          <div className="login-pw">
            <h4>Password</h4>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <div className="login-etc">
            <Link to="/signup" className="login-signup">
              signup
            </Link>
          </div>
          <div className="submit">
            <input type="submit" value="submit" onClick={onSubmit} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
