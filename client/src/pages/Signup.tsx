import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const registerAccount = async (
    email: string,
    password: string,
    name: string
  ) => {
    const res = await axios.post("/users", { email, password, name });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); //만약 state가 없다면 그냥 return 한다.
    if (!email) {
      alert("Failed to signup");
      return;
    }
    if (!password) {
      alert("Failed to signup");
      return;
    }
    if (!name) {
      alert("Failed to signup");
      return;
    }

    registerAccount(email, password, name);

    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup">
        <h2>Sign-up</h2>
        <form className="signup-form" onSubmit={onSubmit}>
          <div className="signup-id">
            <h4>E-mail</h4>
            <input
              type="text"
              value={email}
              placeholder="이메일"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
            />
          </div>
          <div className="signup-pw">
            <h4>Password</h4>
            <input
              type="password"
              value={password}
              placeholder="비밀번호"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
            />
          </div>
          <div className="signup-name">
            <h4>이름</h4>
            <input
              type="text"
              value={name}
              placeholder="이름"
              onChange={({ target }) => {
                setName(target.value);
              }}
            />
          </div>

          <button className="signup-submit">회원가입</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
