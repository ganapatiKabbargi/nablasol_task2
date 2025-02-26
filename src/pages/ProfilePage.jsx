import React from "react";
import styles from "./ProfilePage.module.css";

function ProfilePage() {
  return (
    <div className={styles.userProfile}>
      <div className={styles.title}>Your Profile</div>
      <div className={styles.subTitle}>
        Enter the login information for your account.You will be able to create
        additional users after registering.
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>First Name</span>
        <input type="text" placeholder="Enter Your First Name" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Last Name</span>
        <input type="text" placeholder="Enter Your Last Name" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Email</span>
        <input type="text" placeholder="Enter Your E-mail" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Address</span>
        <input type="text" placeholder="Enter Your Address" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Password</span>
        <input type="text" placeholder="Enter Your password" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Confirm Password</span>
        <input type="text" placeholder="Enter Your Passsword" />
      </div>
    </div>
  );
}

export default ProfilePage;
