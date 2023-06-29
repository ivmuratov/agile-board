import { memo, FC, SVGProps } from 'react';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconButtonProps extends SvgProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  disabled?: boolean;
  onClick?: () => void;
}

export const IconButton: FC<IconButtonProps> = memo(
  ({
    className,
    fill = '#374151',
    Svg,
    disabled = false,
    width = 17,
    height = 17,
    onClick,
    ...props
  }) => (
    <button
      type='button'
      disabled={disabled}
      className='m-0 cursor-pointer border-none bg-none p-0 outline-none'
      onClick={onClick}
    >
      <Svg
        className={
          disabled
            ? `cursor-default opacity-30 ${className}`
            : `hover:fill-blue-500 hover:opacity-100 ${className}`
        }
        fill={fill}
        opacity='0.6'
        width={width}
        height={height}
        {...props}
      />
    </button>
  ),
);
