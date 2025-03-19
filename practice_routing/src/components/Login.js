import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

// styles
import styles from "./Account.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const auth = getAuth();

  // Log out user and reset fields when the component mounts
  useEffect(() => {
    const logoutAndReset = async () => {
      try {
        await signOut(auth);
        setEmail("");
        setPassword("");
      } catch (err) {
        console.error("Error logging out: ", err);
      }
    };

    logoutAndReset();
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res.user) {
        navigate("/"); // Navigate to home on successful login
      }
    } catch (err) {
      if (err.code === "auth/user-not-found") {
        setError("No account found with this email.");
      } else if (err.code === "auth/wrong-password") {
        setError("Incorrect password. Please try again.");
      } else {
        setError("Failed to log in. Please try again.");
      }
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          <span>Email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </label>
        {!isPending && <button className="btn">Login</button>}
        {isPending && (
          <button className="btn" disabled>
            Loading...
          </button>
        )}
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="signup-link">
        Don't have an account?
        <NavLink to="/signup"> Sign Up</NavLink>
      </div>
    </div>
  );
}
