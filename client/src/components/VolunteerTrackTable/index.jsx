import React from "react";
import { Table, Container } from "react-bootstrap";
import VolunteerTrackingInfo from "../VolunteerTrackInfo";
import { fetchVolunteerActivityList } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const VolunteerActivityTable = () => {
  const dispatch = useDispatch();
  const volunteers = useSelector((state) => state.volunteersTrack);

  React.useEffect(() => {
    dispatch(fetchVolunteerActivityList());
  }, []);

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Project</th>
            <th>Volunteers Participated</th>
            <th>Showed up</th>
            <th>Event date</th>
          </tr>
        </thead>
        <tbody>
          {volunteers &&
            volunteers.map((volunteer) => {
              return (
                <>
                  <VolunteerTrackingInfo volunteer={volunteer} />
                </>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default VolunteerActivityTable;
