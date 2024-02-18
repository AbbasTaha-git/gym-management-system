import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GenericButton from "../components/GenericButton";
import GenericInput from "../components/GenericInput";
import GenericTable from "../components/GenericTable";
import { Grid } from "@mui/material";
import { Dayjs } from "dayjs";

interface Member {
  id: number | null | string;
  name: string;
  password: string;
  gender: string;
  dateOfBirth: Dayjs | null;
  registrationDate: Dayjs | null;
  membershipStatus: string;
}

const ListOfMembersPage: React.FC = () => {
  // Initialize state variables
  const [members, setMembers] = useState<Member[]>([]); // Initialize with an empty array
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  const handleViewDetails = (memberId: string) => {
    // Use the navigate function to navigate to the member detail page with the memberId as a parameter
    navigate(`/member/${memberId}`);
  };
  const handleCancel = () => {
    navigate("/AddMembers");
  };

  // Load member data from localStorage when the component mounts
  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem("members") || "[]");
    setMembers(savedMembers);
  }, []);

  // Filter members based on the entered search text
  const filteredMembers = members.filter(
    (member) => member.name?.toLowerCase().includes(searchText.toLowerCase()) // Use optional chaining
  );

  return (
    <div>
      <h2>Member List</h2>
      <GenericInput
        id="filled-basic"
        variant="outlined"
        label="Search"
        value={searchText}
        onChange={(newValue) => setSearchText(newValue)}
      />

      <GenericTable<Member>
        data={filteredMembers}
        columns={[
          "ID",
          "Name",
          "Gender",
          "Date of Birth",
          "Registration Date",
          "Membership Status",
          "Status",
        ]}
        renderCell={(member, column) => {
          switch (column) {
            case "ID":
              return member.id;
            case "Name":
              return member.name;
            case "Gender":
              return member.gender;
            case "Date of Birth":
              return member.dateOfBirth
                ? member.dateOfBirth.toString().split("T")[0]
                : "";
            case "Registration Date":
              return member.registrationDate
                ? member.registrationDate.toString().split("T")[0]
                : "";

            case "Membership Status":
              return member.membershipStatus;
            case "Status":
              return (
                <GenericButton
                  text="View Details"
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    if (member.id !== null) {
                      handleViewDetails(member.id.toString());
                    }
                  }}
                />
              );
            default:
              return "";
          }
        }}
      />
      <Grid item paddingTop={2}>
        <GenericButton
          variant="outlined"
          color="error"
          text="Back"
          onClick={handleCancel}
        />
      </Grid>
    </div>
  );
};

export default ListOfMembersPage;
