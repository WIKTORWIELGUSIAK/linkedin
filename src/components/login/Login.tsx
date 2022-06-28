/** @format */

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import { auth } from "../../firebase-config";
import { User } from "firebase/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  // const updateUserProfile = (user: any) => {
  //   updateProfile(user, {
  //     displayName: name,
  //   });
  // };
  async function signUp() {
    createUserWithEmailAndPassword(auth, email, password).then(async () => {
      await updateUserProfile();
      if (auth.currentUser) {
        dispatch(
          login({
            email: email,
            uid: auth.currentUser.uid,
            displayName: name,
            photoUrl: profilePic,
          })
        );
      }
    });
  }

  async function updateUserProfile() {
    if (auth.currentUser) {
      const user: User = auth.currentUser;

      updateProfile(user, {
        displayName: name,
        photoURL: profilePic,
      })
        .then(() => {
          // Profile updated!
          console.log("Profile updated!", user);
        })
        .catch((error) => {
          // An error occurred
          console.log(error);
        });
    }
  }

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    } else {
      // createUserWithEmailAndPassword(auth, email, password)
      //   .then((userAuth: any) => {
      //     updateProfile(userAuth, {
      //       displayName: name,
      //       photoURL: profilePic,
      //     }).then(() => {
      //       dispatch(
      //         login({
      //           email: userAuth.user.email,
      //           uid: userAuth.user.uid,
      //           displayName: name,
      //           photoUrl: profilePic,
      //         })
      //       );
      //     });
      //   })
      //   .catch((error) => alert(error));
      // createUserWithEmailAndPassword(auth, email, password).then(
      //   (userAuth: any) => {
      //     updateUserProfile(userAuth);
      //     console.log(name);
      //     dispatch(
      //       login({
      //         email: userAuth.user.email,
      //         uid: userAuth.user.uid,
      //         displayName: name,
      //         photoURL: profilePic,
      //       })
      //     );
      //   }
      // );
    }
  };

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="login">
      <img src="linkedin-full-logo.svg" alt="" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={signUp}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
