import React, { useEffect, useState } from "react";
import { Modal, Button, Input } from "antd";
import { editFact } from "@/reducers/reducers";
import { useDispatch } from "react-redux";
export default function ModalEdit(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [fact, setFact] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setFact(props.data.selectedFact);
    console.log(props.data.selectedFact);
  }, [props.data]);

  const handleOk = () => {
    setModalText("Submitting....");
    setConfirmLoading(true);

    console.log("Editing fact of id, ", props.data.selectedId);
    console.log("Editing fact: new fact, ", fact);
    // editFact({ id: props.data.id, fact });
    const editFactThunk = editFact({ id: props.data.selectedId, fact });
    // Then dispatch the thunk function itself
    dispatch(editFactThunk);
    setConfirmLoading(false);
    props.handleCancel();
  };

  const handleCancel = () => {
    props.handleCancel();
  };

  const handleFactChange = (e) => {
    setFact(e.target.value);
  };

  return (
    <Modal
      title="Edit Fact"
      visible={props.isEditModalVisible}
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
          onChange={handleFactChange}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>Length:</label>
        <Input placeholder="Length" value={fact.length} readOnly />
      </div>
    </Modal>
  );
}
