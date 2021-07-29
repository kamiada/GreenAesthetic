import React from "react";
import { Layout } from "../../components";
import "./profile.scss";

const Profile = () => {
  return (
    <Layout>
      <div className="profile_container">
        <div className="profile_circle"> </div>
        <p> Hello! My name is Adrianna.</p>
      </div>
    </Layout>
  );
};
export default Profile;
