import React from "react";
import styles from "./BuissnessInformationPage.module.css";
function BuissnessInformationPage() {
  return (
    <div className={styles.userProfile}>
      <div className={styles.title}>Buissness Information</div>
      <div className={styles.subTitle}>
        Enter the login information for your account.You will be able to create
        additional users after registering.
      </div>
      <div className={styles.generalInfo}>GENERAL INFORMATION</div>

      <div className={styles.inputBox}>
        <span className={styles.details}>Brand Name*</span>
        <input type="text" placeholder="Enter Your Brand Name" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Brand Type*</span>
        <input type="text" placeholder="Enter Your Brand Type" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Street Address*</span>
        <input type="text" placeholder="Enter Your Street Address" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>City*</span>
        <input type="text" placeholder="Enter Your City " />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Zip Code*</span>
        <input type="text" placeholder="Enter Zip Code" />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Tax ID Number*</span>
        <input type="text" placeholder="Enter Tax ID Number" />
      </div>
      <div className={styles.generalInfo}>DOCUMENTS</div>
      <div className={styles.documents}>
        <span className={styles.documentDetails}>
          Once the following documents are signed, you'll be ready to get starte
        </span>
        <input type="text" placeholder="Electronically sign the agreement" />
        <button className={styles.documentButton}>1</button>
      </div>
      <div className={styles.documents}>
        <input type="text" placeholder="Electronically sign the agreement" />
        <button className={styles.documentButton}>1</button>
      </div>
      <div className={styles.generalInfo}>COI PDF UPLOAD</div>
      <div className={styles.documents}>
        <span className={styles.documentDetails}>
          Once the following documents are signed, you'll be ready to get starte
        </span>
        <input type="text" placeholder="Electronically sign the agreement" />
        <button className={styles.documentButton}>1</button>
      </div>
    </div>
  );
}

export default BuissnessInformationPage;
