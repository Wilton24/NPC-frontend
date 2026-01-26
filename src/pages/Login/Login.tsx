import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { api } from "../../api/api";
import styles from "./Login.module.css";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Please fill in all fields");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        try {
            setLoading(true);

            const res = await api("/api/auth/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
            });

            if (!res.ok) {
                const data = await res.json();
                setError(data.message || "Invalid email or password");
                return;
            }

            const data = await res.json();

            login(data.token);
            console.log("TOKENSKIE", data.token);

            navigate("/players/rankings");
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.card} onSubmit={handleSubmit}>
                <h1>Welcome Back</h1>
                <p className={styles.subtitle}>
                    Login to access player rankings
                </p>

                {error && <p className={styles.error}>{error}</p>}

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                </div>

                <button
                    type="submit"
                    className={styles.loginBtn}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className={styles.registerText}>
                    Don’t have an account?{" "}
                    <Link to="/register" className={styles.registerLink}>
                        Register here
                    </Link>
                </p>
            </form>
        </div>
    );
}
