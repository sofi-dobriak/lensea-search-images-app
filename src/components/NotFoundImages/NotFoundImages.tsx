import styles from './NotFoundImages.module.css';

interface NotFoundImagesProps {
  message: string;
}

const NotFoundImages = ({ message }: NotFoundImagesProps) => {
  return <p className={styles.notFoundImages}>{message}</p>;
};

export default NotFoundImages;
