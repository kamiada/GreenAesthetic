import React, { Fragment } from "react";
import { profilePic } from "../../images";
import { Link } from "react-scroll";
import "./sea-profile.scss";
import { Layout } from "../../components";

const Profile = () => {
  return (
    <Fragment>
      <Layout>
        <div className="profile_container" id="home">
          <div className="profile_circle">
            <img src={profilePic} alt="woman who build and owns this website" />
          </div>
          <div className="text-holder">
            <p>
              {" "}
              Hello! My name is Adrianna. I am software engineer currently
              working for BBC News
            </p>
          </div>

          <Link
            class="profile-button-scroll"
            to="about"
            spy={true}
            smooth={true}
            title="Scroll down!"
          >
            Scroll down to find out about my projects!
          </Link>
        </div>
      </Layout>
    </Fragment>
  );
};
export default Profile;
