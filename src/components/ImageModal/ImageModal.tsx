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
      overlayClassName='fixed inset-0 bg-[var(--modal-bg-color)] flex items-center justify-center'
      className='rounded-lg'
    >
      {image && (
        <img
          className='rounded-lg object-contain'
          src={image.urls.regular}
          alt={image.alt_description}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
