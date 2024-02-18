import React from "react";

const ClearLocalStorageButton = () => {
  const handleClearLocalStorage = () => {
    localStorage.clear();
    // Optionally, you can provide feedback to the user that localStorage has been cleared.
    alert("LocalStorage has been cleared.");
  };

  return <button onClick={handleClearLocalStorage}>Clear LocalStorage</button>;
};

export default ClearLocalStorageButton;
