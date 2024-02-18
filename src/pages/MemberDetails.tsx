// MemberDetailPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import GenericButton from "../components/GenericButton";

// Define a Member type (you can adjust this based on your actual data structure)
interface Member {
  id: string;
  name: string;
  gender: string;
  dateOfBirth: string;
  registrationDate: string;
  membershipStatus: string;
}

const MemberDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [member, setMember] = useState<Member | null>(null);
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/ListOfMembersPage");
  };
  useEffect(() => {
    // Fetch the member's data based on the id from your data source (e.g., localStorage)
    const savedMembers = JSON.parse(localStorage.getItem("members") || "[]");
    const selectedMember = savedMembers.find((m: Member) => m.id === id);
    if (selectedMember) {
      setMember(selectedMember);
    }
  }, [id]);

  if (!member) {
    return <div>Loading...</div>; // You can show a loading indicator here
  }

  return (
    <div>
      <h2>Member Details</h2>
      <p>ID: {member.id}</p>
      <p>Name: {member.name}</p>
      <p>Gender: {member.gender}</p>
      <p>Date of Birth: {member.dateOfBirth.split("T")[0]}</p>
      <p>Registration Date: {member.registrationDate.split("T")[0]}</p>
      {member.membershipStatus === "Active" ? (
        <p style={{ color: "green", fontWeight: "bold" }}>active</p>
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>active</p>
      )}
      <GenericButton
        variant="outlined"
        color="error"
        text="Back"
        onClick={handleCancel}
      />
    </div>
  );
};

export default MemberDetails;
