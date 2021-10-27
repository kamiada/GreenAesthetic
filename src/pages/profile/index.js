import React, { Fragment } from "react";
import { Layout } from "../../components";
import { profilePic } from "../../images";
import { Link } from "react-scroll";
import "./sea-profile.scss";

const divStyle = {
  fill: "#e91e63",
};

const Profile = () => {
  return (
    <Fragment>
      <div className="background_layout">
        <main>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0099ff"
              fill-opacity="1"
              d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,165.3C560,149,640,139,720,154.7C800,171,880,213,960,208C1040,203,1120,149,1200,112C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            ></path>
          </svg>
        </main>
      </div>

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

    // <Layout>
    //   <div className="blobby_background">
    //     <div class="tk-blob" style={divStyle}>
    //       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.6 385.5">
    //         <path d="M381.4 86.5c43.5 48 77.5 110.3 68.8 168.7-8.6 58.4-59.9 113-114.8 126.7-54.9 13.6-113.4-13.7-176.6-40.6-63.1-27-130.7-53.5-151.5-102.8-20.9-49.2 5.1-121.1 50.3-169.5C102.8 20.7 167.1-3.9 225.9.5c58.8 4.5 111.9 38.1 155.5 86z"></path>
    //       </svg>
    //     </div>
    //   </div>

    //   <div className="profile_container" id="home">
    //     <div className="profile_circle">
    //       <img src={profilePic} alt="woman who build and owns this website" />
    //     </div>
    //     <div className="text-holder">
    //       <p>
    //         {" "}
    //         Hello! My name is Adrianna. I am software engineer currently working
    //         for BBC News
    //       </p>
    //     </div>

    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    //   <path
    //     fill="#0099ff"
    //     fill-opacity="1"
    //     d="M0,64L40,90.7C80,117,160,171,240,186.7C320,203,400,181,480,165.3C560,149,640,139,720,154.7C800,171,880,213,960,208C1040,203,1120,149,1200,112C1280,75,1360,53,1400,42.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
    //   ></path>
    // </svg>

    //     <Link
    //       class="profile-button-scroll"
    //       to="about"
    //       spy={true}
    //       smooth={true}
    //       title="Scroll down!"
    //     >
    //       Scroll down to find out about my projects!
    //     </Link>
    //   </div>
    // </Layout>
  );
};
export default Profile;
