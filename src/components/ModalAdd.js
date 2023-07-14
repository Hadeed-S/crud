import React from "react";
import { Modal, Input } from "antd";
import { useState } from "react";
import { saveNewFact } from "@/reducers/reducers";
import { useDispatch } from "react-redux";

export default function ModalAdd(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [fact, setFact] = useState("");
  const dispatch = useDispatch();

  const handleOk = () => {
    setConfirmLoading(true);

    const addFactThunk = saveNewFact({ fact });
    dispatch(addFactThunk);
    setConfirmLoading(false);
    handleCancel();
  };

  const handleCancel = () => {
    props.setAddModalOpen(false);
  };

  return (
    <Modal
      title="Add Fact"
      visible={props.addModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
    >
      <div>
        <label htmlFor="fact-input">Fact:</label>
        <Input
          id="fact-input"
          placeholder="Enter fact"
          value={fact}
          onChange={(e) => {
            setFact(e.target.value);
          }}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Length:</label>
        <Input placeholder="Length" value={fact.length} readOnly />
      </div>
    </Modal>
  );
}
