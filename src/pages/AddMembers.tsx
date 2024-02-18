import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import GenericInput from "../components/GenericInput";
import GenericRadioButton from "../components/GenericRadioButton";
import GenericButton from "../components/GenericButton";
import GenericDateInput from "../components/GenericDateInput";
import dayjs, { Dayjs } from "dayjs";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import nameValidator from "./../validators/nameValidator";
import { passwordValidator } from "../validators/passwordValidator";
// import GenericClearLocalStorage from "../components/GenericClearLocalStorage";

interface Member {
  id: number | null | string;
  name: string;
  password: string;
  gender: string;
  dateOfBirth: Dayjs | null;
  registrationDate: Dayjs | null;
  membershipStatus: string;
}

const AddMembers = () => {
  const initialMember: Member = {
    name: "",
    id: null,
    password: "",
    gender: "Male",
    dateOfBirth: dayjs("2023/10/16"),
    registrationDate: dayjs("2023/10/16"),
    membershipStatus: "Active",
  };
  const [member, setMember] = useState<Member>(initialMember);
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  const handleToListOfMember = () => {
    navigate("/ListOfMembersPage");
  };
  const existingMembers: Member[] = JSON.parse(
    localStorage.getItem("members") || "[]"
  );

  const existingPasswords: string[] = existingMembers.map((member) =>
    member.password !== null ? member.password : ""
  );

  const [nameError, setNameError] = useState(false); // Add state for name error
  const [passError, setPassError] = useState(false); // Add state for ID error
  const [passErrorMessage, setPassErrorMessage] = useState<string | null>(null); // Initialize with null

  const validateForm = () => {
    const nameValidatorResult = nameValidator(member.name);
    const passwordValidatorResult = passwordValidator(
      member.password,
      existingPasswords
    );

    if (nameValidatorResult === true && passwordValidatorResult === null) {
      setNameError(false);
      setPassError(false); // Reset password error
      setPassErrorMessage(null); // Reset password error message
      return true;
    } else if (nameValidatorResult === false) {
      setNameError(true);
      setPassError(false); // Reset password error
      setPassErrorMessage(null); // Reset password error message
    } else {
      setNameError(false);
      setPassError(true); // Set password error
      setPassErrorMessage(passwordValidatorResult); // Set password error message
    }
    return false;
  };

  const generateUniqueId = () => {
    return dayjs().format("YYYYMMDDHHmmssSSS");
  };

  const handleSubmit = () => {
    if (validateForm()) {
      // Valid form, proceed with submission

      // Generate a unique ID
      const uniqueId = generateUniqueId();

      // Update the member with the generated ID
      const updatedMember = { ...member, id: uniqueId };

      console.log("Member Data:", updatedMember);

      // Add the new member to the array
      existingMembers.push(updatedMember);

      // Save the updated member data back to localStorage
      localStorage.setItem("members", JSON.stringify(existingMembers));

      // Reset the member state to its initial values
      setMember(initialMember);
    }
  };

  return (
    <Container className="add-member">
      <h2>Add A New Member</h2>
      <Grid container>
        <Grid item xs={12} sx={{ paddingTop: 4 }}>
          <GenericInput
            id="filled-basic"
            label="Name"
            variant="outlined"
            value={member.name}
            onChange={(newValue) => setMember({ ...member, name: newValue })}
            error={nameError}
          />

          <GenericInput
            id="filled-basic"
            label="Password"
            variant="outlined"
            value={member.password}
            error={passError}
            errorMessage={passErrorMessage || ""}
            onChange={(newValue) =>
              setMember({ ...member, password: newValue })
            }
          />
          <GenericRadioButton
            defaultValue="Male"
            label="Gender"
            rd1label="Male"
            rd2label="Female"
            value={member.gender}
            onChange={(newValue) => setMember({ ...member, gender: newValue })}
          />
          <GenericDateInput
            label="Date of Birth"
            value={member.dateOfBirth}
            onChange={(newValue) =>
              setMember({ ...member, dateOfBirth: newValue })
            }
          />
          <GenericDateInput
            label="Registration Date"
            value={member.registrationDate}
            onChange={(newValue) =>
              setMember({ ...member, registrationDate: newValue })
            }
          />
          <GenericRadioButton
            label="Status"
            defaultValue="Active"
            rd1label="Active"
            rd2label="Inactive"
            value={member.membershipStatus}
            onChange={(newValue) =>
              setMember({ ...member, membershipStatus: newValue })
            }
          />

          <Grid container paddingTop={2} spacing={2} justifyContent="center">
            <Grid item>
              <GenericButton
                variant="contained"
                color="primary"
                text="Submit"
                onClick={handleSubmit}
              />
            </Grid>
            <Grid item>
              <GenericButton
                variant="outlined"
                color="error"
                text="Cancel"
                onClick={handleCancel}
              />
            </Grid>
          </Grid>
          <Grid item paddingTop={2}>
            <GenericButton
              variant="contained"
              color="secondary"
              text="List of Members"
              onClick={handleToListOfMember}
            />
          </Grid>
          {/* <GenericClearLocalStorage /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddMembers;
