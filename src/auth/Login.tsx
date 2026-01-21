import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login(); // fake login for now
        navigate("/players/rankings");
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Login</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
