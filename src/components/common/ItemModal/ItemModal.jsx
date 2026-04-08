/* eslint-disable react/no-array-index-key */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import './ItemModal.css';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
  ArrowDownCircleFill,
} from 'react-bootstrap-icons';
import { Languages } from '../../landing/Projects/styles';

const ScrollableSlide = ({ item, name, index, isActive }) => {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    if (!isActive) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = 0;
    setShowArrow(el.scrollHeight > el.clientHeight);
  }, [isActive]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setShowArrow(el.scrollTop === 0 && el.scrollHeight > el.clientHeight);
  }, []);

  return (
    <div className="screenshot-scroll-wrapper">
      <div
        className="screenshot-scroll"
        ref={scrollRef}
        onScroll={handleScroll}
      >
        <GatsbyImage
          placeholder="blurred"
          image={item.image.childrenImageSharp[0].gatsbyImageData}
          alt={`${name} screenshot ${index + 1}`}
        />
      </div>
      {showArrow && (
        <div className="scroll-hint">
          <ArrowDownCircleFill className="scroll-hint-arrow" />
        </div>
      )}
    </div>
  );
};

const ItemModal = ({ showModal, handleClose, project }) => {
  const { id, html } = project;
  const { name, screenshotArray, languagesArray } = project.frontmatter;
  const [showControls, setShowControls] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setShowControls(screenshotArray.length !== 1);
  }, [screenshotArray]);

  useEffect(() => {
    if (showModal) setActiveIndex(0);
  }, [showModal]);

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
          onSlid={(i) => setActiveIndex(i)}
        >
          {screenshotArray.map((item, index) => (
            <Carousel.Item key={`${id}-carousel${index}`}>
              <ScrollableSlide
                item={item}
                name={name}
                index={index}
                isActive={index === activeIndex}
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
