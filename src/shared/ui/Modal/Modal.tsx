/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { FC, ReactNode, useEffect } from 'react';

import { Portal } from '../Portal';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  title?: string;
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, isOpen, title, onClose }) => {
  const handleESC = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleESC);
    return () => {
      document.removeEventListener('keydown', handleESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Portal element={document.getElementById('root') ?? document.body}>
      <div
        className={`${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-900/50 transition-opacity delay-300`}
        onClick={onClose}
      >
        <div
          className={`${
            isOpen ? 'scale-100' : 'scale-50'
          } w-1/2 rounded-md bg-slate-50 transition-transform delay-300`}
          onClick={e => e.stopPropagation()}
        >
          <header className='mb-2 flex items-center justify-between border-b py-3 px-6'>
            <h3 className='text-2xl'>{title}</h3>
            <button
              type='button'
              // eslint-disable-next-line no-octal-escape
              className='text-4xl opacity-50 after:inline-block after:content-["\00d7"] hover:opacity-90'
              onClick={onClose}
            />
          </header>
          <main className='py-3 px-6'>{children}</main>
        </div>
      </div>
    </Portal>
  );
};
