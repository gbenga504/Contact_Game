import React from "react";
import "./index.css";

export const Body = () => {
  return (
    <div className="row body">
      <ImageRenderer />
      <div className="column">
        <TextRenderer />
        <ButtonRenderer>
          <Button icon="ei-sc-facebook" text="Continue with Facebook" />
          <Button
            icon="ei-sc-twitter"
            text="Continue with Twitter"
            style={{ marginLeft: "30px" }}
          />
        </ButtonRenderer>
      </div>
    </div>
  );
};

const ImageRenderer = () => {
  return (
    <div className="imageRenderer">
      <img src={""} alt="" />
    </div>
  );
};

const TextRenderer = () => {
  return (
    <div className="textRenderer">
      Contactnaire is a game originally designed to act as a clone for the
      popular game <b>"WHO WANTS TO BE A MILLIONAIRE"</b>. This game offers more
      real life scenarios to make the game more communicative and engaging. To
      start, continue with your facebook or twitter account and have fun. No
      worries, the game and site has been heavily minimized while providing
      stable functionalities.
      <br />
      <br />
      <center>
        <b>
          <h4>SO WE HAVE GOT YOU COVERED!!!</h4>
        </b>
      </center>
    </div>
  );
};

const ButtonRenderer = props => {
  return (
    <div className="row buttonRenderer">
      {props.children}
    </div>
  );
};

const Button = props => {
  return (
    <div className="social_button" style={{ ...props.style }}>
      <div data-icon={props.icon} />
      <div className="buttonText">
        {props.text}
      </div>
    </div>
  );
};
