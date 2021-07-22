/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './ItemModal.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
} from 'react-bootstrap-icons';
import { Languages } from '../../landing/Projects/styles';

const ItemModal = ({ showModal, handleClose, project }) => {
  const { name, screenshotArray, description, languagesArray, id } = project;

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body id="modalBody">
        <Carousel
          interval={4000}
          variant="dark"
          nextIcon={<ArrowRightCircleFill className="arrow" />}
          prevIcon={<ArrowLeftCircleFill className="arrow" />}
        >
          {screenshotArray.map((item, index) => (
            <Carousel.Item key={`${id}-carousel${index}`}>
              <GatsbyImage
                placeholder="blurred"
                width={1908}
                height={987}
                image={item.image.childrenImageSharp[0].gatsbyImageData}
                alt="Slide number 3"
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <p>{(description.replaceAll('\n'), 'br'.html())}</p>
      </Modal.Body>
      <Modal.Footer>
        {(languagesArray || ['Language1', 'Language2', 'Language3']).map(
          (language, index) => (
            <Languages key={`${id}-languages${index}`}>
              <span key={`${id}-languages-spa${index}`}>{language}</span>
            </Languages>
          )
        )}
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
