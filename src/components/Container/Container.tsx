import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className='max-w-[1200px] py-0 px-[20px] m-auto mb-[20px]'>{children}</div>;
};

export default Container;
