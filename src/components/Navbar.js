import React, { useState } from "react";
import { Button } from "antd";
import ModalAdd from "./ModalAdd";
export default function Navbar() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  return (
    <div className="navbar">
      <Button
        onClick={() => {
          setAddModalOpen(true);
        }}
      >
        Add
      </Button>
      {addModalOpen && (
        <ModalAdd
          addModalOpen={addModalOpen}
          setAddModalOpen={setAddModalOpen}
        ></ModalAdd>
      )}
    </div>
  );
}
