import React from "react";
import "./index.css";

export const Body = () => {
  return (
    <div className="row body">
      <div className="col-xs-12 body_container">
        <div className="row">
          <ImageRenderer />
          <TextRenderer />
          <ButtonRenderer>
            <Button icon="ei-sc-facebook" text="Continue with Facebook" />
            <Button icon="ei-sc-twitter" text="Continue with Twitter" style={{ marginLeft: "300px" }} />
          </ButtonRenderer>
        </div>
      </div>
    </div>
  );
};

const ImageRenderer = () => {
  return (
    <div className="col-xs-1">
      <div className="imageRenderer">
        <img src={""} alt="" />
      </div>
    </div>
  );
};

const TextRenderer = () => {
  return (
    <div className="col-xs-11 textRenderer">
      Contactnaire is a game originally designed to act as a clone for the popular game "WHO WANTS TO BE A MILLIONAIRE". This game offers more real life scenarios to make the game more communicative and engaging.
      To start, continue with your facebook or twitter account and have fun. No worries, the game and site has been heavily minimized while providing stable functionalities.
      <br />
      <br />
      <center><b><h4>SO WE HAVE GOT YOU COVERED!!!</h4></b></center>
    </div>
  );
};

const ButtonRenderer = props => {
  return (
    <div className="row buttonRenderer">
      <div className="col-xs-offset-3 col-xs-6">
        {props.children}
      </div>
    </div>
  );
};

const Button = props => {
  return (
    <div
      className="social_button"
      style={{ ...props.style }}
    >
      <div data-icon={props.icon} />
      <div className="buttonText">{props.text}</div>
    </div>
  );
};
