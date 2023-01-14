import { FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import styles from "./register.module.css";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase";
import { useRouter } from "next/router";

type FormFields = {
  email: string;
  password: string;
  confirmPassword: string;
};

const defaultFormFields: FormFields = {
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const router = useRouter();
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const user = await createAuthUserWithEmailAndPassword(email, password);
        if (user) {
          router.push("orders");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("passwords must match!");
    }
  };
  return (
    <div className={styles.register}>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <div>
          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
