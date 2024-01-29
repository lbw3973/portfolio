import SubTitle from "@/components/common/SubTitle";
import React from "react";
import ContentItem from "./ProjectItem";
import projects from "@/constants/projects.json";

function Projects() {
  return (
    <section className="lg:py-28 md:py-21 py-14  lg:min-w-[1000px] px-4 mx-auto  overflow-hidden" id="Work">
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
