import React, { useState } from "react";

function AccountPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
    address: "",
    agree: false,
  });

  const [showPass1, setShowPass1] = useState(false);
  const [showPass2, setShowPass2] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.password2) {
      alert("Passwords do not match — et2akdi mn el password.");
      return;
    }

    if (!form.agree) {
      alert("You must agree to the terms & conditions.");
      return;
    }

    alert("Account created successfully! 🎉");
  };

  return (
    <section className="account-page">
      <div className="auth-wrapper">
        <div className="auth-card">
          <div className="auth-left">
            <h2>Join GlowCart</h2>
            <p>
              Get exclusive offers, track your orders, and save your favourite
              products in one place.
            </p>
            <p className="small-note">
              Already have an account?{" "}
              <span className="signin-link">Sign in</span>
            </p>
          </div>

          <div className="auth-right">
            <h3>Create your account</h3>

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="fname">First name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstName"
                    placeholder="Nour"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="lname">Last name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastName"
                    placeholder="Elgindy"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="010xxxxxxxx"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field password-wrap">
                  <label htmlFor="password">Password</label>
                  <input
                    type={showPass1 ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Choose a password"
                    minLength={6}
                    value={form.password}
                    onChange={handleChange}
                    required
                  />
                  <i
                    className={`fas ${
                      showPass1 ? "fa-eye-slash" : "fa-eye"
                    } toggle-pass`}
                    title="Show / hide"
                    onClick={() => setShowPass1((s) => !s)}
                  ></i>
                </div>

                <div className="form-field password-wrap">
                  <label htmlFor="password2">Confirm password</label>
                  <input
                    type={showPass2 ? "text" : "password"}
                    id="password2"
                    name="password2"
                    placeholder="Repeat password"
                    minLength={6}
                    value={form.password2}
                    onChange={handleChange}
                    required
                  />
                  <i
                    className={`fas ${
                      showPass2 ? "fa-eye-slash" : "fa-eye"
                    } toggle-pass`}
                    title="Show / hide"
                    onClick={() => setShowPass2((s) => !s)}
                  ></i>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="address">Address (optional)</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Nasr City, Cairo"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>

              <div className="row-actions">
                <label className="agree-wrap">
                  <input
                    type="checkbox"
                    name="agree"
                    checked={form.agree}
                    onChange={handleChange}
                    required
                  />
                  <span>
                    I agree to the{" "}
                    <span className="terms-link">Terms &amp; Conditions</span>.
                  </span>
                </label>

                <span className="small-note">
                  Already registered?{" "}
                  <span className="signin-link">Sign in</span>
                </span>
              </div>

              <button type="submit" className="submit-auth-btn">
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountPage;
