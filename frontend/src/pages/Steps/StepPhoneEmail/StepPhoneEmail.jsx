import React, { useState } from "react";
import Email from "./Email/Email";
import Phone from "./Phone/Phone";
import style from "./StepPhoneEmail.module.css";

const StepPhoneEmail = ({ onNext }) => {
  const phoneEmailMap = {
    phone: Phone,
    email: Email,
  };
  const [type, setType] = useState("phone");
  const Component = phoneEmailMap[type];

  return (
    <>
      <div className={style.cardWrapper}>
        <div>
          <div className={style.buttonWrap}>
            <button
              onClick={() => setType("phone")}
              className={`${style.tabButton} ${
                type === "phone" ? style.active : ""
              }`}
            >
              <img src="/images/phone-white.png" alt="phone" />
            </button>
            <button
              onClick={() => setType("email")}
              className={`${style.tabButton} ${
                type === "email" ? style.active : ""
              }`}
            >
              <img src="/images/mail-white.png" alt="phone" />
            </button>
          </div>
          <Component onNext={onNext} />
        </div>
      </div>
    </>
  );
};

export default StepPhoneEmail;
