import Button from "@material-ui/core/Button";
import FadeIn from "../animations/FadeIn";
import firebase from "firebase/app";
import React from "react";
import { useHistory } from "react-router-dom";
import Particles from "../animations/Particles";
import Toggle from "../components/DarkTheme";

export default function BaseLayout(props) {
  const history = useHistory();

  function logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
      });
  }

  return (
    <>
      <FadeIn>
        <section className="d-flex align-items-center justify-content-between mx-4 my-3">
          <Toggle />
          <a
            href="https://www.pattarai.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-animation" width="70" height="70" alt="" />
          </a>
          <Button class="customButton" onClick={logout}>
            LOGOUT
          </Button>
        </section>

        <section className="d-flex justify-content-center align-items-center mt-3">
          <div
            className="card"
            style={{
              minHeight: "80vh",
              width: "90%",
              boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
            }}
          >
            <section className="container-fluid">{props.children}</section>
          </div>
        </section>
      </FadeIn>
      <Particles />
    </>
  );
}