'use client';
import clsx from 'clsx';
import useConversations from '../hooks/useConversations';
import EmptyState from '../components/EmptyState';

const Home = () => {
  const { isOpen } = useConversations();
  return (
    <div
      className={clsx(
        `
    lg:pl-80 h-full lg:block
    `,
        isOpen ? 'block' : 'hidden'
      )}>
      <EmptyState />
    </div>
  );
};

export default Home;
