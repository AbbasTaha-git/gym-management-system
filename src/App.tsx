import { Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Test from "./pages/Test";
import AddMembers from "./pages/AddMembers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ListOfMembersPage from "./pages/ListOfMembersPage";
import MemberDetails from "./pages/MemberDetails";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/AddMembers" element={<AddMembers />} />
          <Route path="/ListOfMembersPage" element={<ListOfMembersPage />} />
          <Route path="/member/:id" element={<MemberDetails />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </LocalizationProvider>
    </div>
  );
}

export default App;
