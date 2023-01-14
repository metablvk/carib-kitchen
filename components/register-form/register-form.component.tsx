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
  /**
   * Register Form
   * @typedef {FormFields}
   * @param {object} - formFields
   */
  const router = useRouter();
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password, confirmPassword } = formFields;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    /**
     * Handle Change Function
     * @param {object} - e
     * destructures the name and value off the e.target object,
     * and then invokes the setFormFields function passing in
     * previous formFields, and the new updated formField data.
     */
    const { name, value } = e.target as HTMLInputElement;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    /**
     * Handle Submit Function
     * @param {object} - e
     * @param {string} - email
     * @param {string} - password
     *
     * Prevent the default refresh, and try to invoke the createAuthUserWithEmailAndPassword
     * using email and password as arguments, and if a user is returned redirect to the orders
     * page else catch the thrown error and console it.
     */
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
