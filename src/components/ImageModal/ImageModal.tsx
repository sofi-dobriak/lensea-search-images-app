import { Image } from '../../types/Image';
import Modal from 'react-modal';

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
      overlayClassName='fixed inset-0 bg-[var(--modal-bg-color)] flex items-center justify-center  border-none'
      className='rounded-lg  border-none'
    >
      {image && (
        <img
          className='rounded-lg object-contain border-none'
          src={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
