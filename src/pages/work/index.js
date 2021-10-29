import React from "react";
import "./works.scss";
import { Layout } from "../../components";
import { BBCNews, BBC } from "../../images";

const work = () => {
  return (
    <Layout>
      <div className="work_container" id="work">
        <div className="holder">
          <div>
            <span>Testing</span>
            <img src={BBCNews} alt="logo of BBC News"/>
          </div>
          <div>
            <span>Testing</span>
            <img src={BBC} alt="logo of BBC News"/>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default work;
