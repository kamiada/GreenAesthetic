import React from "react";
import "./works.scss";
import { Layout, Tile } from "../../components";
import { BBCNews, BBC } from "../../images";
import data from './experience.json';

const work = () => {
  return (
    <Layout>
      <div className="work_container" id="work">
        <div className="holder">
        <Tile 
          image={BBCNews}
          alt="logo of BBC News"
          company={data.jobExperience[0].title}
          job_title={data.jobExperience[0].job}
          points={data.jobExperience[0].points}
          skills={data.jobExperience[0].skills}
        />
        <Tile 
          image={BBC}
          alt="logo of BBC News"
          company={data.jobExperience[1].title}
          job_title={data.jobExperience[1].job}
          points={data.jobExperience[1].points}
          skills={data.jobExperience[1].skills}
        />
        <Tile 
          image={BBCNews}
          alt="logo of BBC News"
          company={data.jobExperience[2].title}
          job_title={data.jobExperience[2].job}
          points={data.jobExperience[2].points}
          skills={data.jobExperience[2].skills}
        />
        <Tile 
          image={BBCNews}
          alt="logo of BBC News"
          company={data.jobExperience[3].title}
          job_title={data.jobExperience[3].job}
          points={data.jobExperience[3].points}
          skills={data.jobExperience[3].skills}
        />
                <Tile 
          image={BBCNews}
          alt="logo of BBC News"
          company={data.jobExperience[4].title}
          job_title={data.jobExperience[4].job}
          points={data.jobExperience[4].points}
          skills={data.jobExperience[4].skills}
        />
        </div>
      </div>
    </Layout>
  );
};
export default work;
