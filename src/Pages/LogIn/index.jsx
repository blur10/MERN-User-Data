import "./styles.css";
// import { UserContext } from "../../App";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../firebase-config";
import { getAuth } from "firebase/auth";
// import { useEffect } from "react";

const SignIn = () => {
  // const { isSignedIn, setIsSignedIn } = useContext(UserContext);

  // if (isSignedIn === true) {
  //   return <Navigate to="/" />;
  // }
  const onSubmit = async (value) => {
    console.log(value);
    try {
      const user = await signInWithEmailAndPassword(
        getAuth(),
        value.email,
        value.password
      );
      // setIsSignedIn(!isSignedIn);
      console.log(user);
    } catch (error) {
      alert(error.code);
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // actions.resetForm();
  };

  // const [loggedInEmail, setloggedInEmail] = useState();
  // const [loggedInPassword, setloggedInPassword] = useState();
  // const passRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5}$/;
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .email("Please enter a valid Email Address")
        .required("Email is Required"),
      password: yup
        .string()
        // .min(5)
        // .matches(passRules, {
        //   message:
        //     "Password must have atleast 1 Uppercase, 1 Lowercase and 1 numeric Character",
        // })
        .required("Pssword is Required"),
    }),
    onSubmit,
  });
  const navigate = useNavigate();

  // if (isSignedIn === true) {
  //   return <Navigate to="/" />;
  // }

  // const handleSubmit = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       getAuth(),
  //       loggedInEmail,
  //       loggedInPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     alert(error.code);
  //   }
  // };
  // useEffect(async () => {
  //   await setIsSignedIn(!isSignedIn);
  // }, []);

  return (
    <div className="logIn">
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Log In</h1>
        <div className="email">
          <input
            value={values.email}
            onChange={(event) => {
              handleChange(event);
              // setloggedInEmail(event.target.value);
            }}
            id="email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onBlur={handleBlur}
            className={errors.email && touched.email ? "inputValidity" : ""}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
          {/* <ErrorMessage name="email" /> */}
        </div>
        <div className="password">
          <input
            value={values.password}
            onChange={(event) => {
              handleChange(event);
              // setloggedInPassword(event.target.value);
            }}
            id="password"
            type="password"
            placeholder="Enter Your Password"
            onBlur={handleBlur}
            className={
              errors.password && touched.password ? "inputValidity" : ""
            }
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="logInBtn"
          // onClick={() => {
          //   loggedIn;
          // }}
        >
          Sign In
        </button>
        <div className="signUp">
          <p className="alreadyAcc">Have not Created Your Account Yet?</p>
          <button
            onClick={() => {
              navigate("/createUser");
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
