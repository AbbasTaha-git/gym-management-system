import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";
import GenericInput from "./GenericInput";

// Define a Member type (you can adjust this based on your actual data structure)
interface Member {
  id: number;
  name: string;
  gender: string;
  dateOfBirth: string;
  registrationDate: string;
  membershipStatus: string;
}

const MemberList: React.FC = () => {
  // Initialize state variables
  const [members, setMembers] = useState<Member[]>([]); // Initialize with an empty array
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();

  // Function to handle viewing member details
  const handleViewDetails = (memberId: number) => {
    // Use the navigate function to navigate to the member detail page with the memberId as a parameter
    navigate(`/member/${memberId}`);
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

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Registration Date</TableCell>
              <TableCell>Membership Status</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Map through filtered members and display them in the table */}
            {filteredMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>{member.id}</TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>{member.gender}</TableCell>
                <TableCell>
                  {member.dateOfBirth.toString().split("T")[0]}
                </TableCell>
                <TableCell>
                  {member.registrationDate.toString().split("T")[0]}
                </TableCell>
                <TableCell>{member.membershipStatus}</TableCell>
                <TableCell>
                  <GenericButton
                    text="View Details"
                    variant="outlined"
                    color="primary"
                    onClick={() => handleViewDetails(member.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MemberList;
