import { useState } from 'react';
import './CreateUser.css';
import axios from 'axios';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });

      setSuccess('Account created successfully! Please log in.');
      setError('');
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
      setError('Signup failed. Please try again.');
      setSuccess('');
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
                src="https://omghcontent.affino.com/AcuCustom/Sitename/DAM/235/SINGLE_USE_AI_BING.jpg"
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

        {/* Signup Section */}
        <div className="login-column">
          <div className="login-form-wrapper">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/44b292e04a93a8e4865dee5f8dae7d28e737cbd142ec304ed481bc7db95ee561?placeholderIfAbsent=true&apiKey=74199a2312b1446fb7cf219015e79026"
              alt="Ques.AI Logo"
              className="login-logo"
            />
            <h2 className="login-title">
              Create Your <span style={{ fontWeight: 600 }}>Ques.AI</span> Account
            </h2>
            <form onSubmit={handleSignup}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                className="login-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}
              <button type="submit" className="login-button">
                Sign Up
              </button>
            </form>
            <div className="signup-prompt">
              <p className="signup-text">Already have an account?</p>
              <a href="/login" className="signup-link">
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateUser;
