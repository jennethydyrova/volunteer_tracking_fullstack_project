import React from "react";
import { Button, Modal } from "react-bootstrap";
import ProjectForm from "../ProjectForm";
import { patchProjectInfo, deleteProjectInfo } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const ProjectsInfo = ({ project }) => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const projectInfo = useSelector((state) => state.projects);
  console.log(project);

  const [input, setInput] = React.useState({
    id: project.id,
    name: project.name,
    days: project.days,
    time: project.time,
    location: project.location,
  });

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      patchProjectInfo(
        input.name,
        input.days,
        input.time,
        input.location,
        input.id
      )
    );
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteProjectInfo(id));
  };

  return (
    <>
      <tr>
        <td>{project.id}</td>
        <td>{project.name}</td>
        <td>{project.days}</td>
        <td>{project.time}</td>
        <td>{project.location}</td>
        <td>
          <Button onClick={() => setShow(true)}>Edit</Button>
        </td>
        <td>
          <Button onClick={(e) => handleDelete(e, project.id)}>Delete</Button>
        </td>
      </tr>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit project information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProjectForm
            showButton={false}
            project={project}
            input={input}
            setInput={setInput}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              setShow(false);
              handleEdit(e, project.id);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProjectsInfo;
