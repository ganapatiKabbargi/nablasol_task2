import React, { useState } from "react";
import styles from "./CreateAccount.module.css";
import ProfilePage from "../pages/ProfilePage";
import BuissnessInformationPage from "../pages/BuissnessInformationPage";
function CreateAccount() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className={styles.main}>
      {/* <div className={styles.header}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.heading}>Create New Account</div>
        <div className={styles.contact}>
          <button className={styles.contactButton}>Contact</button>
        </div>
      </div> */}
      <div className={styles.formContainer}>
        <div className={styles.barContainer}>
          <div className={styles.bar}>
            <span>1</span>Your Profile
          </div>
          <div className={styles.bar}>
            <span>2</span>Buissness Information
          </div>
          <div className={styles.bar}>
            <span>3</span>Additional users
          </div>
        </div>
        <form action="" className={styles.formEl}>
          <BuissnessInformationPage />
          <div className={styles.formButtonContainer}>
            <button className={styles.backButton} type="button">
              Back To Login
            </button>
            <div>
              {currentPage === 1 && (
                <button
                  className={styles.previousButton}
                  type="button"
                  onClick={() => {
                    setCurrentPage((prev) => prev - 1);
                  }}
                >
                  Previous Step
                </button>
              )}
              <button className={styles.nextButton} type="submit">
                Next Step
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
