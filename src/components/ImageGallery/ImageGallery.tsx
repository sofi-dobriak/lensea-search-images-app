import { Image } from '../../types/Image';
import ImageCard from '../ImageCard/ImageCard';

interface ImageGalleryProps {
  images: Image[];
  openModal: (image: Image) => void;
}

const ImageGallery = ({ images, openModal }: ImageGalleryProps) => {
  return (
    <ul className='flex items-center justify-center flex-wrap gap-5 mb-5'>
      {images.map(image => (
        <ImageCard key={image.id} image={image} onClick={() => openModal(image)} />
      ))}
    </ul>
  );
};

export default ImageGallery;
