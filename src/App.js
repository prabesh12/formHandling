import FormInput from "./FormInput";
import "./App.css";
import { useState } from "react";
function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "User name",
      errorMessage:"user name should be 4-16 character must not contain any specail character",
      label: "Username",
      pattern:"^[A-Za-z0-9]{4,16}$",
      required:"true"
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "email",
      errorMessage:"please enter valid email",
      label: "Email",
      required:"true"
    },
    {
      id: 3,
      name: "dob",
      type: "date",
      placeholder: "Date of Birth",
      errorMessage:"",
      label: "DOB",
      required:"true"
    },
    {
      id: 4,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage:"password should contain 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
      required:"true"
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"password don't match! please enter the password correctly",
      label: "Confirm Password",
      pattern:values.password,
      required:"true"
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values)

  const handleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="app">
      <form action="" onSubmit={handleForm}>
        <h1>Register</h1>
        {inputs.map((input) => {
          return (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
