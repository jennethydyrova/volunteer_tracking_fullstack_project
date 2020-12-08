import React from "react";
import { Button, Modal } from "react-bootstrap";
import VolunteerForm from "../VolunteerForm";
import { patchVolunteerInfo, deleteVolunteerInfo } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";

const VolunteerTrackingInfo = ({ volunteer }) => {
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();
  const volunteerTrackingInfo = useSelector((state) => state.volunteersTrack);

  //   const [input, setInput] = React.useState({
  //     id: volunteer.id,
  //     name: volunteer.name,
  //     languagesSpoken: volunteer.languagesSpoken,
  //     occupation: volunteer.occupation,
  //     skills: volunteer.skills,
  //     role: volunteer.role,
  //   });

  //   const handleEdit = (e) => {
  //     e.preventDefault();
  //     dispatch(
  //       patchVolunteerInfo(
  //         input.name,
  //         input.languagesSpoken,
  //         input.occupation,
  //         input.skills,
  //         input.role,
  //         input.id
  //       )
  //     );
  //     console.log(input.name);
  //   };

  //   const handleDelete = (e, id) => {
  //     e.preventDefault();
  //     dispatch(deleteVolunteerInfo(id));
  //   };

  return (
    <>
      <tr>
        <td>{volunteer.id}</td>
        <td>{volunteer.projectsId}</td>
        <td>{volunteer.volunteerId}</td>
        <td>{volunteer.showedUp === true ? "Showed up" : "Did not show up"}</td>
        <td>{volunteer.eventDate}</td>
        <td>
          <Button onClick={() => setShow(true)}>Edit</Button>
        </td>
        {/* <td>
          <Button onClick={(e) => handleDelete(e, volunteer.id)}>Delete</Button>
        </td> */}
      </tr>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit volunteer information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <VolunteerForm
            showButton={false}
            volunteer={volunteer}
            // input={input}
            // setInput={setInput}
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
              //   handleEdit(e, volunteer.id);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VolunteerTrackingInfo;
