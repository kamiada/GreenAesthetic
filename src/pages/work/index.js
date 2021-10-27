import React from "react";
import "./works.scss";
import { Layout } from "../../components";

const work = () => {
  return (
    <Layout>
        <div className="work_container" id="work">
        <div className="holder">

          <div className="tile">
            <img className="tile_img" src="" alt=""/>
            <div className="tile_text">BBC News</div>
          </div>

          <div className="tile">
          <div className="tile_text">BBC Scotland</div>
            <img className="tile_img" src="" alt=""/>
          </div>

        </div>
      </div>
    </Layout>
  );
};
export default work;
