'use client';

import Modal from '@/app/components/Modal';
import Image from 'next/image';

interface ImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src?: string | '';
}
const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  src = ' ',
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-96 h-96">
        <Image alt="Image" className="object-fill" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
