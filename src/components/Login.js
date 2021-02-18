import React, { useState } from "react";
import "./Login.css";
import { login, logout, selectUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { motion } from "framer-motion";
import { LinkedIn, RestoreFromTrashOutlined } from "@material-ui/icons";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
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

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error.message));
  };

  const svgVariants = {
    initial: { rotate: -180 },
    animate: {
      rotate: 0,
      transition: {
        duration: 0,
        staggerChildren: 0.2,
      },
    },
  };

  const pathVariants = {
    initial: {
      fill: "rgba(3,102,195, 0)",
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      fill: "rgba(3,102,195, 1)",
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        fill: {
          delay: 2,
          duration: 2,
        },
      },
    },
  };

  const blockVariants = {
    initial: { rotate: -180, backgroundColor: "rgba(3,102,195, 0)" },
    animate: {
      rotate: 0,
      backgroundColor: "rgba(3,102,195, 1)",
      transition: {
        duration: 0,
        staggerChildren: 0.2,
        backgroundColor: {
          delay: 2,
          duration: 2,
        },
      },
    },
  };

  const blockLetterVariants = {
    initial: {
      fill: "rgba(255,255,255, 0)",
      opacity: 0,
      pathLength: 0,
    },
    animate: {
      fill: "rgba(255,255,255, 1)",
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
        fill: {
          delay: 2,
          duration: 2,
        },
      },
    },
  };

  const containerVariants = {
    initial: { backgroundColor: "rgba(3,102,195, 0)", x: 50, y: -20 },
    animate: {
      backgroundColor: "rgba(3,102,195, 1)",
      x: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <div className="login">
      <div className="login__animate">
        <motion.svg
          class="pizza-svg"
          style={{ overflow: "visible" }}
          stroke="rgba(3,102,195, 1)"
          strokeWidth="2"
          strokeLinecap="round"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 347.87 86.64"
          width="347.87px"
          height="86.64px"
          x="0"
          y="0px"
          variants={svgVariants}
          initial="initial"
          animate="animate"
        >
          <motion.path
            x="0"
            className="L"
            transform="scale(.5)"
            variants={pathVariants}
            d="M0,4.44h18.24v65.52H50.4v15.36H0V4.44z"
          />

          <motion.path
            className="I"
            fill="none"
            x="0"
            variants={pathVariants}
            transform="scale(.5)"
            d="M69.6,19.44c-5.76,0-9.48-4.08-9.48-9.12c0-5.16,3.84-9.12,9.72-9.12c5.88,0,9.48,3.96,9.6,9.12
            c0,5.04-3.72,9.12-9.72,9.12H69.6z M60.6,85.32V26.64h18.24v58.68H60.6z"
          />

          <motion.path
            className="N"
            fill="none"
            x="0"
            transform="scale(.5)"
            variants={pathVariants}
            d="M93.48,45.36c0-7.32-0.24-13.44-0.48-18.72h15.84l0.84,8.16h0.36c2.4-3.84,8.28-9.48,18.12-9.48
            c12,0,21,8.04,21,25.32v34.68h-18.24V52.8c0-7.56-2.64-12.72-9.24-12.72c-5.04,0-8.04,3.48-9.36,6.84c-0.48,1.2-0.6,2.88-0.6,4.56
            v33.84H93.48V45.36z"
          />

          <motion.path
            className="K"
            fill="none"
            x="0"
            transform="scale(.5)"
            variants={pathVariants}
            d="M182.04,51.36h0.24c1.32-2.52,2.76-4.92,4.2-7.08l11.88-17.64h21.96l-21,23.76l24,34.92h-22.44L186.6,61.2
            l-4.56,5.76v18.36H163.8V0h18.24V51.36z"
          />

          <motion.path
            className="E"
            fill="none"
            x="0"
            transform="scale(.5)"
            variants={pathVariants}
            d="M241.2,61.8c0.6,7.56,8.04,11.16,16.56,11.16c6.24,0,11.28-0.84,16.2-2.52l2.4,12.36
            c-6,2.52-13.32,3.72-21.24,3.72c-19.92,0-31.32-11.52-31.32-29.88c0-14.88,9.36-31.32,29.64-31.32c18.96,0,26.16,14.76,26.16,29.28
            c0,3.12-0.36,5.88-0.6,7.2H241.2z M262.68,49.32c0-4.44-1.92-11.88-10.2-11.88c-7.8,0-10.92,7.08-11.4,11.88H262.68z"
          />

          <motion.path
            className="D"
            fill="none"
            x="0"
            transform="scale(.5)"
            variants={pathVariants}
            d="M347.39,0v67.8c0,6.6,0.24,13.56,0.48,17.52h-16.2l-0.72-8.52h-0.36c-3.6,6.48-10.8,9.84-18.36,9.84
            c-13.92,0-25.08-11.88-25.08-30.12c-0.12-19.68,12.24-31.2,26.28-31.2c7.32,0,12.84,2.64,15.48,6.6h0.24V0H347.39z M329.15,51.6
            c0-1.08,0-2.28-0.24-3.36c-1.08-4.92-5.04-8.88-10.68-8.88c-8.4,0-12.6,7.44-12.6,16.68c0,9.84,4.92,16.08,12.48,16.08
            c5.28,0,9.6-3.6,10.68-8.76c0.24-1.2,0.36-2.64,0.36-4.08V51.6z"
          />
        </motion.svg>

        <motion.div
          className="linkedin__blockContainer"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.svg
            class="linkedin__block"
            style={{ overflow: "visible" }}
            stroke="rgba(255,255,255, 1)"
            strokeWidth="2"
            strokeLinecap="round"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="30 -30 500 600"
            width="100"
            height="100"
            variants={blockVariants}
            initial="initial"
            animate="animate"
          >
            <motion.path
              className="block__I"
              fill="none"
              transform="scale(.7)"
              variants={blockLetterVariants}
              d="M87.05,167.03c-52.59,0-86.55-37.25-86.55-83.26C0.5,36.66,35.56,0.5,89.24,0.5
              c53.68,0,86.55,36.16,87.65,83.26c0,46.02-33.96,83.26-88.74,83.26H87.05z M4.88,768.5V232.76h166.53V768.5H4.88z"
            />

            <motion.path
              className="block__N"
              fill="none"
              transform="scale(.7)"
              variants={blockLetterVariants}
              d="M305.07,403.67c0-66.83-2.19-122.7-4.38-170.91H445.3l7.67,74.5h3.29c21.91-35.06,75.6-86.55,165.43-86.55
              c109.56,0,191.73,73.4,191.73,231.17V768.5H646.89V471.6c0-69.02-24.1-116.13-84.36-116.13c-46.02,0-73.4,31.77-85.45,62.45
              c-4.39,10.96-5.48,26.29-5.48,41.63V768.5H305.07V403.67z"
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png"
        alt=""
      /> */}

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
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
