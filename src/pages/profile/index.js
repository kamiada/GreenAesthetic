import React from "react";
import { Layout, Button } from "../../components";
import "./profile.scss";

const Profile = () => {
  return (
    <Layout>
      <div className="profile_container">
        <div className="profile_circle"> </div>
        <div className="text-holder">
        <p> Hello! My name is Adrianna. I am software engineer currently working for BBC News</p>
        </div>
      </div>
      <div>
        <Button
        className="profile-button-scroll"
        onClick={() => console.log('here')}  
        title="Scroll down to find out about my projects!"
        />
      </div>
    </Layout>
  );
};
export default Profile;
