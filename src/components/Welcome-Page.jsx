import App from "@/App";
import React from "react";
import { buttonVariants } from "./ui/button";
import "./index.css";
import { router } from "@/router";

function WelcomePage() {
  return (
    <div className="welcome-page-container">
      <div className="welcome-images">
        <img className="unsplash-1" src="" />
        <img className="unsplash-2" src="" />
        <img className="unsplash-3" src="" />
        <img className="unsplash-4" src="" />
        <img className="unsplash-5" src="" />
        <img className="unsplash-6" src="" />
        <img className="unsplash-7" src="" />
      </div>
      <div className="signup">
        <div className="logo"></div>
        <div className="welcome-intro"></div>
        <div className="form"></div>
      </div>
    </div>
  );
}

export default WelcomePage;
