import React from "react";
import { Table, Container } from "react-bootstrap";
import ProjectsInfo from "../ProjectsInfo";
import { fetchProjectsList } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const ProjectsTable = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);

  React.useEffect(() => {
    dispatch(fetchProjectsList());
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Days</th>
            <th>Time</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {projects &&
            projects.map((project) => {
              return (
                <>
                  <ProjectsInfo project={project} key={project.id} />
                </>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ProjectsTable;
