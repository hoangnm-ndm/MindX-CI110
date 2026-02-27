import React from "react";

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

function EventUpDemo() {
  const handleSubmit = () => alert("Submit!");
  const handleCancel = () => alert("Cancel!");

  return (
    <div>
      <Button label="Submit" onClick={handleSubmit} />
      <Button label="Cancel" onClick={handleCancel} />
    </div>
  );
}

export default EventUpDemo;
