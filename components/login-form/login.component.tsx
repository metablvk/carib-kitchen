import { useState, ChangeEvent, FormEvent } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase";
import styles from "./login.module.css";
import { useRouter } from "next/router";

type FormFields = {
  email: string;
  password: string;
};

const defaultFormFields: FormFields = {
  email: "",
  password: "",
};

const LoginForm = () => {
  /**
   * Login Form
   * @typedef {FormFields}
   * @param {object} - formFields
   */
  const router = useRouter();
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { email, password } = formFields;

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
     * @param {string} - email from formFields
     * @param {string} - password from formFields
     *
     * Prevent the default refresh, and try to invoke the signInAuthUserWithEmailAndPassword
     * using email and password as arguments, and if a user is returned redirect to the orders
     * page else catch the thrown error and console it.
     */
    e.preventDefault();
    try {
      const user = await signInAuthUserWithEmailAndPassword(email, password);
      if (user) {
        router.push("orders");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.login}>
      <h1>Login</h1>
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
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
