import { Image } from '../../types/Image';
import styles from './ImageModal.module.css';
import Modal from 'react-modal';
import { MouseEvent } from 'react';

Modal.setAppElement('#root');

interface ImageModalProps {
  image: Image | null;
  closeModal: () => void;
}

const ImageModal = ({ closeModal, image }: ImageModalProps) => {
  return (
    <Modal
      isOpen={!!image}
      onRequestClose={closeModal}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      {image && (
        <img className={styles.image} src={image.urls.regular} alt={image.alt_description} />
      )}
    </Modal>
  );
};

export default ImageModal;
