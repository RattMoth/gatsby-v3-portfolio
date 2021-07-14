import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import './ItemModal.css';
import { StaticImage } from 'gatsby-plugin-image';

const ItemModal = ({ showModal, handleClose, project }) => (
  <Modal
    id="modalMain"
    show={showModal}
    onHide={handleClose}
    centered
    size="lg"
  >
    <Modal.Header closeButton>
      <Modal.Title id="modalTitle">Modal heading for {project}</Modal.Title>
    </Modal.Header>
    <Modal.Body id="modalBody">
      <Carousel interval={null} variant="dark">
        {[1, 2, 3, 4].map((item) => (
          <Carousel.Item>
            <StaticImage
              placeholder="blurred"
              width={1908}
              height={987}
              src="https://placekitten.com/1908/987"
              alt={`Slide number ${item}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <p>Woo ur readin a modAl</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ItemModal;
