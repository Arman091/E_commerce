import React, { useRef } from "react";

import styles from "./signup.module.css";

const Signup = () => {
  let nameinputref = useRef();
  let emailinputref = useRef();
  let passwordinputref = useRef();

  const inputreader = async () => {
    const user = {
      name: nameinputref.current.value,
      email: emailinputref.current.value,
      password: passwordinputref.current.value,
    };
   // calling the API here
    const result = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });

    // converting data from readable stream
    let myresult= await result.json()
    console.log(myresult,"hii from signup component");
    nameinputref.current.value = "";
    emailinputref.current.value = "";
    passwordinputref.current.value = "";
  };

  return (
    <>
      <div className={styles.inputbox}>
        <h1>Register</h1>
        <input type="text" placeholder="Enter name" ref={nameinputref} />
        <input type="text" placeholder="Enter Email" ref={emailinputref} />
        <input
          type="password"
          placeholder="Enter Password"
          ref={passwordinputref}
        />
        <button type="button" className={styles.button} onClick={inputreader}>
          signup
        </button>
      </div>
    </>
  );
};

export default Signup;
