import React, { useState } from "react";
import styles from "./CreateAccount.module.css";
import ProfilePage from "../pages/ProfilePage";
import BuissnessInformationPage from "../pages/BuissnessInformationPage";

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
  brandName: "",
  brandType: "",
  streetAddress: "",
  city: "",
  zipCode: "",
  taxIdNumber: "",
};
function CreateAccount() {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const [currentPage, setCurrentPage] = useState(0);
  const pages = [
    <ProfilePage {...data} updateFields={updateFields} />,
    <BuissnessInformationPage {...data} updateFields={updateFields} />,
  ];

  function submitHandler(e) {
    e.preventDefault();
    if (currentPage === 0) {
      setCurrentPage((prev) => prev + 1);
    } else {
      // localStorage.clear();
      localStorage.setItem("userData", JSON.stringify(data));
      alert("Data is stored in local storage");
      window.location.reload();
    }
  }
  return (
    <div className={styles.main}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>Create New Account</div>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.barContainer}>
          <div
            className={`${styles.bar} ${
              (currentPage === 0 || currentPage === 1) && styles.active
            } ${currentPage === 0 && styles.activeBorder}`}
          >
            <span>1</span>Your Profile
          </div>
          <div
            className={`${styles.bar} ${currentPage === 1 && styles.active} ${
              currentPage === 1 && styles.activeBorder
            }`}
          >
            <span>2</span>Buissness Info
          </div>
          <div
            className={`${styles.bar} ${currentPage === 2 && styles.active}${
              currentPage === 3 && styles.activeBorder
            }`}
          >
            <span>3</span>Additional users
          </div>
        </div>
        <form action="" className={styles.formEl} onSubmit={submitHandler}>
          {pages[currentPage]}
          <div className={styles.formButtonContainer}>
            <button className={styles.backButton} type="button">
              &#60; Back To Login
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
                  &#60; Previous Step
                </button>
              )}
              <button className={styles.nextButton} type="submit">
                {currentPage === 1 ? "Submit" : "Next Step"} &#62;
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAccount;
