import React, { useEffect, useState } from "react";
import {
  Button,
  Modal as ReactModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const Modal = ({ cls, btn, title, body, externalToggle, footer }) => {
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
      <ReactModal className={cls} isOpen={modal} toggle={toggle}>
        {title !== false && <ModalHeader toggle={toggle}>{title}</ModalHeader>}

        <ModalBody>{body}</ModalBody>
        {footer !== false && (
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        )}
      </ReactModal>
    </div>
  );
};
export default Modal;
