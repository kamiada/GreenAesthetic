import React, { Fragment } from "react";
import { profilePic } from "../../images";
import { Link } from "react-scroll";
import "./sea-profile.scss";
import { Layout } from "../../components";

const Profile = () => {
  return (
    <Fragment>
      <Layout>
        <div className="top_wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#F35060"
              fill-opacity="1"
              d="M0,192L15,165.3C30,139,60,85,90,74.7C120,64,150,96,180,90.7C210,85,240,43,270,53.3C300,64,330,128,360,154.7C390,181,420,171,450,176C480,181,510,203,540,213.3C570,224,600,224,630,234.7C660,245,690,267,720,261.3C750,256,780,224,810,208C840,192,870,192,900,170.7C930,149,960,107,990,128C1020,149,1050,235,1080,250.7C1110,267,1140,213,1170,160C1200,107,1230,53,1260,80C1290,107,1320,213,1350,224C1380,235,1410,149,1425,106.7L1440,64L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
            ></path>
          </svg>
        </div>
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
