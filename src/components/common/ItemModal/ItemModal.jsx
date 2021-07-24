/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
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
  const { id, html } = project;
  const { name, screenshotArray, languagesArray } = project.frontmatter;
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    console.log(screenshotArray.length);
    setShowControls(screenshotArray.length !== 1);
  }, [screenshotArray]);

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
          indicators={showControls}
          controls={showControls}
          interval={6500}
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
        <div
          id="project-description"
          // This is the method suggested in the Gatsby docs, so I'll leave it for now
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Modal.Body>
      <Modal.Footer>
        {(languagesArray || ['Language1', 'Language2', 'Language3']).map(
          (language, index) => (
            <Languages key={`${id}-languages${index}`}>
              <span key={`${id}-languages-spa${index}`}>{language}</span>
            </Languages>
          )
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default ItemModal;
