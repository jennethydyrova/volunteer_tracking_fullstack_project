import React from "react";
import { Form, Container, Button } from "react-bootstrap";
import { postVolunteerInfo } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const VolunteerForm = ({ showButton, input, setInput }) => {
  const dispatch = useDispatch();
  const volunteerInfo = useSelector((state) => state.volunteers);

  const [name, setName] = React.useState(input ? input.name : "");
  const [languagesSpoken, setLanguagesSpoken] = React.useState(
    input ? input.languagesSpoken : ""
  );
  const [occupation, setOccupation] = React.useState(
    input ? input.occupation : ""
  );
  const [skills, setSkills] = React.useState(input ? input.skills : "");
  const [role, setRole] = React.useState(input ? input.role : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      dispatch(
        postVolunteerInfo(name, role, languagesSpoken, occupation, skills)
      );
    }
  };

  const handleNameChange = (e) => {
    if (input) {
      setInput({ ...input, name: e.target.value });
    }
    setName(e.target.value);
  };

  const handleLanguagesSpokenChange = (e) => {
    if (input) {
      setInput({ ...input, namelanguagesSpoken: e.target.value });
    }
    setLanguagesSpoken(e.target.value);
  };

  const handleSkillsChange = (e) => {
    if (input) {
      setInput({ ...input, skills: e.target.value });
    }
    setSkills(e.target.value);
  };

  const handleOccupationChange = (e) => {
    if (input) {
      setInput({ ...input, occupation: e.target.value });
    }
    setOccupation(e.target.value);
  };

  const handleRoleChange = (e) => {
    if (input) {
      setInput({ ...input, role: e.target.value });
    }
    setRole(e.target.value);
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
          <Form.Label>Language</Form.Label>
          <Form.Control
            value={languagesSpoken}
            type="text"
            placeholder="Enter languages spoken"
            onChange={(e) => handleLanguagesSpokenChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Occupation</Form.Label>
          <Form.Control
            value={occupation}
            type="text"
            placeholder="Enter occupation"
            onChange={(e) => handleOccupationChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Skills</Form.Label>
          <Form.Control
            value={skills}
            type="text"
            placeholder="Enter skills"
            onChange={(e) => handleSkillsChange(e)}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Role</Form.Label>
          <Form.Control
            value={role}
            type="text"
            placeholder="Enter role"
            onChange={(e) => handleRoleChange(e)}
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

export default VolunteerForm;
