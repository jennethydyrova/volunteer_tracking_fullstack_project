import React from "react";
import VolunteerForm from "../../components/VolunteerForm";
import VolunteerTable from "../../components/VolunteerTable";

const VolunteerContainer = () => {
  return (
    <div style={{ marginTop: "2rem" }}>
      <VolunteerTable />
      <VolunteerForm showButton={true} />
    </div>
  );
};

export default VolunteerContainer;
