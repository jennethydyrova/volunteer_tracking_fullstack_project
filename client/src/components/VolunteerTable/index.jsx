import React from "react";
import { Table, Container } from "react-bootstrap";
import VolunteerInfo from "../VolunteerInfo";
import { fetchVolunteerList } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const VolunteerTable = () => {
  const dispatch = useDispatch();
  const volunteers = useSelector((state) => state.volunteers);

  React.useEffect(() => {
    dispatch(fetchVolunteerList());
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Language</th>
            <th>Occupation</th>
            <th>Skills</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {volunteers &&
            volunteers.map((volunteer) => {
              return (
                <>
                  <VolunteerInfo volunteer={volunteer} />
                </>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default VolunteerTable;
