interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps) => {
  return (
    <button onClick={onClick} className='block m-auto'>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
