import { FC } from 'react';

type PriorityType = '0' | '1' | '2';

const colors: Record<PriorityType, string> = {
  0: 'border-t-green-400 bg-white',
  1: 'border-t-yellow-400 bg-white',
  2: 'border-t-red-400 bg-red-300/50',
};

interface IProps {
  priority: PriorityType;
}

const AgileCard: FC<IProps> = ({ priority }) => {
  return (
    <li
      className={`space-y-7 rounded-lg border-t-4 px-4 py-2 shadow-sm hover:shadow-md ${colors[priority]}`}
    >
      <p className='text-sm text-gray-700'>
        <span className='font-medium'>MR-8 </span>
        <span>Title</span>
      </p>
      <div className='flex justify-between'>
        <span>i</span>
        <span>i</span>
      </div>
    </li>
  );
};

export default AgileCard;
