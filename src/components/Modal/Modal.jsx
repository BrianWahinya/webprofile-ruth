import React, { useEffect, useState } from "react";
import {
  Button,
  Modal as ReactModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Modal = ({ btn, title, body, externalToggle }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    if (externalToggle) {
      setModal(true);
    }
  }, [externalToggle]);

  return (
    <div>
      {btn && (
        <Button color="danger" onClick={toggle} {...btn}>
          {btn.name}
        </Button>
      )}
      <ReactModal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </ReactModal>
    </div>
  );
};
export default Modal;
