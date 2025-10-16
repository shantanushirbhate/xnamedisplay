import React, { useState } from "react";

export default function XDisplayName() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [errors, setErrors] = useState({ firstName: "", lastName: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { firstName: "", lastName: "" };
    let hasError = false;

    if (!firstName.trim()) {
      newErrors.firstName = "⚠ Input field is required";
      hasError = true;
    }
    if (!lastName.trim()) {
      newErrors.lastName = "⚠ Input field is required";
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) return;

    setFullName(`${firstName} ${lastName}`);
  };

  return (
    <div
      style={{
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Full Name Display</h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* First Name */}
          <label style={{ marginTop: "10px", fontWeight: "bold" }}>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          {errors.firstName && (
            <p style={{ color: "goldenrod", margin: "5px 0", fontSize: "0.9rem" }}>
              {errors.firstName}
            </p>
          )}

          {/* Last Name */}
          <label style={{ marginTop: "10px", fontWeight: "bold" }}>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              outline: "none",
            }}
          />
          {errors.lastName && (
            <p style={{ color: "goldenrod", margin: "5px 0", fontSize: "0.9rem" }}>
              {errors.lastName}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        {/* Full Name Display */}
        {fullName && (
          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            Full Name: {fullName}
          </p>
        )}
      </div>

      {/* Responsive Design */}
      <style>
        {`
          @media (max-width: 600px) {
            div {
              padding: 10px;
            }
            input, button {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
}
