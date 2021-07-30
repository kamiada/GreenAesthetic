import React from "react";
import { Layout } from "../../components";
import "./profile.scss";

const Profile = () => {
  return (
    <Layout>
      <div className="profile_container">
        <div className="profile_circle"> </div>
        <div className="text-holder">
        <p> Hello! My name is Adrianna. I am software engineer currently working for BBC Archive Services</p>
        </div>
      </div>
    </Layout>
  );
};
export default Profile;
