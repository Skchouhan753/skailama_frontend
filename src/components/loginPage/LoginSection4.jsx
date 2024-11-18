import { useState } from 'react';
import './LoginSection.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignupOpen, setSignupOpen] = useState(false); 
  const [signupData, setSignupData] = useState({ email: '', password: '' });
//   const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/login',
        { email, password },
        { withCredentials: true }
      );
      alert('Login successful!');
    //   navigate('/create-project');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/signup',
        signupData,
        { withCredentials: true }
      );
      alert('Signup successful!');
      setSignupOpen(false);
    } catch (err) {
      alert(err.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="login-section">
      <div className="content-wrapper">
        {/* Hero Section */}
        <div className="hero-column">
          <div className="hero-content">
            {/* Hero Image and Text */}
          </div>
        </div>

        {/* Login Section */}
        <div className="login-column">
          <div className="login-form-wrapper">
            <h2 className="login-title">
              Welcome to <span style={{ fontWeight: 600 }}>Ques.AI</span>
            </h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
            <div className="signup-prompt">
              <p>Don't have an account?</p>
              <button
                type="button"
                className="signup-link"
                onClick={() => setSignupOpen(true)}
              >
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Signup Modal */}
      {isSignupOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={signupData.email}
                onChange={handleChangeSignup}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={signupData.password}
                onChange={handleChangeSignup}
                required
              />
              <button type="submit">Signup</button>
              <button
                type="button"
                onClick={() => setSignupOpen(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginSection;
