import React from "react";
import "./works.scss";
import { Layout, Tile } from "../../components";

const work = () => {
  return (
    <Layout>
        <div className="work_container" id="work">
        <div className="holder">
        <Tile 
          image="nanan"
          text="batman"
        />
        </div>
      </div>
    </Layout>
  );
};
export default work;
