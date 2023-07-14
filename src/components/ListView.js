import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import ModalView from "@/components/ModalView";
import ModalEdit from "@/components/ModalEdit";
export default function ListView() {
  const ctx = useSelector((state) => state.facts);
  const [isViewModalVisible, setIsViewModalVisible] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedFact, setSelectedFact] = useState("");
  const [selectedLength, setSelectedLength] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const showViewModal = (item) => {
    setSelectedFact(item.fact);
    setSelectedLength(item.length);
    setIsViewModalVisible(true);
  };

  const showEditModal = (item) => {
    setSelectedFact(item.fact);
    setSelectedLength(item.length);
    setSelectedId(item._id);
    setIsEditModalVisible(true);
  };

  const handleOk = () => {
    setIsViewModalVisible(false);
    setIsEditModalVisible(false);
  };

  const handleCancel = () => {
    setIsViewModalVisible(false);
    setIsEditModalVisible(false);
  };

  return (
    <Fragment>
      {ctx && (
        <List
          className="demo-loadmore-list"
          itemLayout="horizontal"
          dataSource={ctx}
          renderItem={(item) => (
            <List.Item
              style={{
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
              actions={[
                <a key="list-loadmore-view" onClick={() => showViewModal(item)}>
                  view
                </a>,
                <a key="list-loadmore-edit" onClick={() => showEditModal(item)}>
                  edit
                </a>,
              ]}
            >
              <List.Item.Meta title={item.fact} description={item.length} />
            </List.Item>
          )}
        />
      )}
      <ModalView
        isViewModalVisible={isViewModalVisible}
        data={{ selectedFact, selectedLength }}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
      <ModalEdit
        isEditModalVisible={isEditModalVisible}
        data={{ selectedFact, selectedLength, selectedId }}
        handleOk={handleOk}
        handleCancel={handleCancel}
      ></ModalEdit>
    </Fragment>
  );
}
