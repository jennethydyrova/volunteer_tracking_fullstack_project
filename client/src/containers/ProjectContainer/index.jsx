import React from "react";
import ProjectForm from "../../components/ProjectForm";
import ProjectTable from "../../components/ProjectTable";

const ProjectContainer = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <ProjectTable />
      <ProjectForm showButton={true} />
    </div>
  );
};

export default ProjectContainer;
