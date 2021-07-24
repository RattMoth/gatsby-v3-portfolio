import { useState } from 'react';

const useItemModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return { showModal, setShowModal, handleClose, handleShow };
};

export default useItemModal;
