import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { postProjectInfo } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const ProjectForm = ({ showButton, input, setInput }) => {
  const dispatch = useDispatch();
  const projectInfo = useSelector((state) => state.projects);

  const [name, setName] = React.useState(input ? input.name : "");
  const [days, setDays] = React.useState(input ? input.days : "");
  const [time, setTime] = React.useState(input ? input.time : "");
  const [location, setLocation] = React.useState(input ? input.location : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      dispatch(postProjectInfo(name, days, time, location));
    }
  };

  const handleNameChange = (e) => {
    if (input) {
      setInput({ ...input, name: e.target.value });
    }
    setName(e.target.value);
  };

  const handleDayChange = (e) => {
    if (input) {
      setInput({ ...input, days: e.target.value });
    }
    setDays(e.target.value);
  };

  const handleTime = (e) => {
    if (input) {
      setInput({ ...input, time: e.target.value });
    }
    setTime(e.target.value);
  };

  const handleLocationChange = (e) => {
    if (input) {
      setInput({ ...input, location: e.target.value });
    }
    setLocation(e.target.value);
  };

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => handleNameChange(e)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Project days</Form.Label>
          <Form.Control
            value={days}
            type="text"
            placeholder="Enter days project is conducted"
            onChange={(e) => handleDayChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
            value={location}
            type="text"
            placeholder="Enter location"
            onChange={(e) => handleLocationChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Time</Form.Label>
          <Form.Control
            value={time}
            type="text"
            placeholder="Enter time of project"
            onChange={(e) => handleTime(e)}
          />
        </Form.Group>
        {showButton && (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        )}
      </Form>
    </Container>
  );
};

export default ProjectForm;
