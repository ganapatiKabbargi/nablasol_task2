import React from "react";
import styles from "./BuissnessInformationPage.module.css";
function BuissnessInformationPage({
  brandName,
  brandType,
  streetAddress,
  city,
  zipCode,
  taxIdNumber,
  updateFields,
}) {
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

        <input
          type="text"
          placeholder="Enter Your Brand Name"
          value={brandName}
          required
          onChange={(e) => updateFields({ brandName: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Brand Type*</span>
        <input
          type="text"
          placeholder="Enter Your Brand Type"
          value={brandType}
          required
          onChange={(e) => updateFields({ brandType: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Street Address*</span>
        <input
          type="text"
          placeholder="Enter Your Street Address"
          value={streetAddress}
          required
          onChange={(e) => updateFields({ streetAddress: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>City*</span>
        <input
          type="text"
          placeholder="Enter Your City "
          value={city}
          required
          onChange={(e) => updateFields({ city: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Zip Code*</span>
        <input
          type="text"
          placeholder="Enter Zip Code"
          value={zipCode}
          required
          onChange={(e) => updateFields({ zipCode: e.target.value })}
        />
      </div>
      <div className={styles.inputBox}>
        <span className={styles.details}>Tax ID Number*</span>
        <input
          type="number"
          placeholder="Enter Tax ID Number"
          value={taxIdNumber}
          required
          onChange={(e) => updateFields({ taxIdNumber: e.target.value })}
        />
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
