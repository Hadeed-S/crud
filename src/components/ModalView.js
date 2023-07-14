import React from "react";
import { Modal, Button } from "antd";
export default function ModalView(props) {
  return (
    <Modal
      title="Basic Modal"
      open={props.isViewModalVisible}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      footer={[
        <Button key="ok" type="primary" onClick={props.handleOk}>
          OK
        </Button>,
      ]}
    >
      <p>Fact: {props.data.selectedFact}</p>
      <p>Length: {props.data.selectedLength}</p>
    </Modal>
  );
}
