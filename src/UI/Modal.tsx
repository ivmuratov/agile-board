import { FC, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface IProps {
  active: boolean;
  setInactive: () => void;
  title: string;
  children: JSX.Element;
}

const Modal: FC<IProps> = ({ active, setInactive, title, children }) => {
  const handleESC = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setInactive();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleESC);
    return () => {
      document.removeEventListener('keydown', handleESC);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return createPortal(
    <div
      className={`${
        active ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      } fixed top-0 left-0 flex h-screen w-screen items-center justify-center bg-slate-900/50 transition-opacity delay-300`}
      onClick={setInactive}
    >
      <div
        className={`${
          active ? 'scale-100' : 'scale-50'
        } w-1/2 rounded-md bg-slate-50 transition-transform delay-300`}
        onClick={e => e.stopPropagation()}
      >
        <header className='mb-2 flex items-center justify-between border-b py-3 px-6'>
          <h3 className='text-2xl'>{title}</h3>
          <button
            className='text-4xl opacity-50 after:inline-block after:content-["\00d7"] hover:opacity-90'
            onClick={setInactive}
          />
        </header>
        <main className='py-3 px-6'>{children}</main>
      </div>
    </div>,
    document.body,
  );
};

export default Modal;
