import React from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../components/shared/Button/Button";
import Card from "../../components/shared/Card/Card";
import styles from "./Home.module.css";

const Home = () => {
  const history = useHistory();

  const startRegister = () => {
    history.push("/authenticate");
  };

  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to Codershouse!" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Let's Go" />
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          {/* <Link style={signInLinkStyle} to="/authenticate">
            Sign in
          </Link> */}
        </div>
      </Card>
    </div>
  );
};

const signInLinkStyle = {
  color: "#0077ff",
  fontWeight: "bold",
  textDecoration: "none",
  marginLeft: "10px",
};

export default Home;
