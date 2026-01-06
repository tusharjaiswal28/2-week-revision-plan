import { useState } from "react";

function PasswordStrength() {
  const [password, setPassword] = useState("");


  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[^A-Za-z0-9]/.test(password);

  const passedCount = [
    hasMinLength,
    hasUppercase,
    hasNumber,
    hasSpecialChar
  ].filter(Boolean).length;

  let borderColor = "red";
  if (passedCount >= 2 && passedCount <= 3) {
    borderColor = "yellow";
  }
  if (passedCount === 4) {
    borderColor = "green";
  }

  return (
    <div>
      <h2>Password Strength Validator</h2>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{
          border: `10px solid ${borderColor}`,
          padding: "8px",
          width: "250px"
        }}
      />

      <ul>
        <li>Min 8 characters {hasMinLength ? "✓" : "✗"}</li>
        <li>Uppercase letter {hasUppercase ? "✓" : "✗"}</li>
        <li>Number {hasNumber ? "✓" : "✗"}</li>
        <li>Special character {hasSpecialChar ? "✓" : "✗"}</li>
      </ul>
    </div>
  );
}

export default PasswordStrength;
