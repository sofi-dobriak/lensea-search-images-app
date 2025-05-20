import { Image } from '../../types/Image';

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  return (
    <li
      onClick={onClick}
      className='cursor-pointer border border-solid border-transparent duration-[250ms] ease hover:scale-105 hover:border-[var(--hover-border-color)] hover:rounded-lg'
    >
      <img
        className='rounded-md w-[250px] object-cover '
        src={image.urls.small}
        alt={image.alt_description}
      />
    </li>
  );
};

export default ImageCard;
