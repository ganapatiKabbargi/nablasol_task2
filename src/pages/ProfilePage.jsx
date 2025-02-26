import React from "react";
import styles from "./ProfilePage.module.css";

function ProfilePage({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  confirmPassword,
  updateFields,
}) {
  return (
    <div className={styles.userProfile}>
      <div className={styles.title}>Your Profile</div>
      <div className={styles.subTitle}>
        Enter the login information for your account.You will be able to create
        additional users after registering.
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>First Name*</span>
        <input
          type="text"
          placeholder="Enter Your First Name"
          value={firstName}
          required
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Last Name*</span>
        <input
          type="text"
          placeholder="Enter Your Last Name"
          value={lastName}
          required
          onChange={(e) => updateFields({ lastName: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Email*</span>
        <input
          type="email"
          placeholder="Enter Your E-mail"
          value={email}
          required
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Phone Number*</span>
        <input
          type="number"
          placeholder="Enter Your Phone Number"
          value={phoneNumber}
          required
          onChange={(e) => updateFields({ phoneNumber: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Password*</span>
        <input
          type="password"
          placeholder="Enter Your password"
          value={password}
          required
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Confirm Password*</span>
        <input
          type="password"
          placeholder="Enter Your Passsword"
          value={confirmPassword}
          required
          onChange={(e) => updateFields({ confirmPassword: e.target.value })}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
