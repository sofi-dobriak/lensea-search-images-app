interface NotFoundImagesProps {
  message: string;
}

const NotFoundImages = ({ message }: NotFoundImagesProps) => {
  return <p className='text-center text-[var(--error-text-color)]'>{message}</p>;
};

export default NotFoundImages;
