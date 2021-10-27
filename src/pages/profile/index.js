import React, { Fragment } from "react";
import { profilePic } from "../../images";
import { Link } from "react-scroll";
import "./sea-profile.scss";

const Profile = () => {
  return (
    <Fragment>
      <div className="layout">
        <main>
          <div className="profile_container" id="home">
            <div className="profile_circle">
              <img
                src={profilePic}
                alt="woman who build and owns this website"
              />
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
        </main>
      </div>
    </Fragment>
  );
};
export default Profile;
