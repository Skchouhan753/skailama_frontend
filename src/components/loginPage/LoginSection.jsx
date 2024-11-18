import { useState } from 'react';
import './LoginSection.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { email, password }, { withCredentials: true });
      
      // Successful login
      console.log(response.data);
      alert('Login successful!');
      navigate('/create-project'); // Redirect to CreateProject page
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
    }
  };

  return (
    <section className="login-section">
      <div className="content-wrapper">
        {/* Hero Section */}
        <div className="hero-column">
          <div className="hero-content">
            <div className="hero-image-container">
              <img
                src="https://kernel-technology.com/wp-content/uploads/2024/01/What-is-Artiificial-IntelligenceAI.webp"
                alt=""
                className="hero-background"
              />
              <div className="hero-text-wrapper">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/33a2c648d9f172e0d2e041239d1946f724990b5a5b891002eb23e8d2b8afaeb0?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
                  alt="Ques.AI Logo"
                  className="logo"
                />
                <h1 className="hero-title">
                  Your podcast will no longer be just a hobby.
                </h1>
                <p className="hero-subtitle">
                  Supercharge Your Distribution using our AI assistant!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Login Section */}
        <div className="login-column">
          <div className="login-form-wrapper">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44b292e04a93a8e4865dee5f8dae7d28e737cbd142ec304ed481bc7db95ee561?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
              alt="Ques.AI Logo"
              className="login-logo"
            />
            <h2 className="login-title">
              Welcome to <span style={{ fontWeight: 600 }}>Ques.AI</span>
            </h2>
            <form onSubmit={handleLogin}>
              <label htmlFor="email" >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password" >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
              <div className="login-options">
                <div className="remember-me-wrapper">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="remember-me-checkbox"
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <a href="#" className="forgot-password">
                  Forgot password?
                </a>
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <p className="or-divider">or</p>
            <div className="social-login-wrapper">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e9365c5e8ccae6205f46473bf52a71ae0f4a6458f36abd9f09de27cdfb2a5c1?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
                alt="Facebook Login"
                className="social-login-button"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c371af73dedf7bef5071a5bb99c0b58f4f35c4edf78d7bd8b7d68960c65d1d7?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
                alt="Apple Login"
                className="social-login-button"
              />
            </div>
            <button className="google-login">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c7a4cf025dae95cabe8d64ac0cc8a8b8e77e8199e9be2777b956c68258d9720?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
                alt="Google Icon"
                className="google-icon"
              />
              <span>Continue with Google</span>
            </button>
            <div className="signup-prompt">
              <p className="signup-text">Don&apos;t have an account?</p>
              <a href="create-account" className="signup-link">
                Create Account
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
