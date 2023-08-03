import SubTitle from "@/components/common/SubTitle";
import React from "react";
import ContentItem from "./ContentItem";
import projects from "@/constants/projects.json";

function Projects() {
  return (
    <section className="py-28 min-w-[1000px] px-4">
      <SubTitle text="Works" />
      {Object.values(projects).map(content => (
        <ContentItem key={content.name} content={content} />
      ))}
    </section>
  );
}

export default Projects;
