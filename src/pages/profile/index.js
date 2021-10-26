import React from "react";
import { Layout, Button } from "../../components";
import { profilePic } from "../../images";
import "./profile.scss";

const scrollToTop = () => {
  window.scroll({
    top: 1000,
    behavior: "smooth",
  });
};

const Profile = () => {
  return (
    <Layout>
      <div className="profile_container" id="home">
        <div className="profile_circle">
          <img src={profilePic} alt="woman who build and owns this website"/>
        </div>
        <div className="text-holder">
        <p> Hello! My name is Adrianna. I am software engineer currently working for BBC News</p>
        </div>
        <Button
        class="profile-button-scroll"
        onClick={() => scrollToTop()}  
        title="Scroll down to find out about my projects!"
        />
      </div>
    </Layout>
  );
};
export default Profile;
