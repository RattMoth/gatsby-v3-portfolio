import * as React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './ItemModal.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Languages } from '../../landing/Projects/styles';

const ItemModal = ({ showModal, handleClose, project }) => {
  const { name, screenshotArray, description, languagesArray } = project;

  return (
    <Modal
      id="modalMain"
      show={showModal}
      onHide={handleClose}
      centered
      size="lg"
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title id="modalTitle">
          Modal heading for {name || 'test'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body id="modalBody">
        <Carousel interval={null}>
          {screenshotArray.map((item) => (
            <Carousel.Item>
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
        <p>
          {description ||
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero nam dolores culpa, obcaecati cum illo ea hic. Tempora quas eum odit repellendus laboriosam eius sed dolores placeat incidunt doloribus!'}
        </p>
      </Modal.Body>
      <Modal.Footer>
        {(languagesArray || ['Language1', 'Language2', 'Language3']).map(
          (language) => (
            <Languages>
              <span>{language}</span>
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
