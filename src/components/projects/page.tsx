import SubTitle from "@/components/common/SubTitle";
import React from "react";
import ContentItem from "./ProjectItem";
import projects from "@/constants/projects.json";

function Projects() {
  return (
    <section className="py-28 lg:min-w-[1000px] px-4 mx-auto" id="Work">
      <SubTitle text="Works" />
      {Object.values(projects)
        .reverse()
        .map((content, index) => (
          <ContentItem key={content.name} content={content} index={index} />
        ))}
    </section>
  );
}

export default Projects;
