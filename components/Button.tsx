import { ButtonType } from '@/lib/types';

type Props = {
  buttonType: ButtonType;
  onButtonClick: Function;
};

export const Button: React.FC<Props> = ({
  buttonType,
  onButtonClick,
  children
}) => {
  return (
    <button
      aria-label="button"
      type="button"
      className={`w-full md:w-auto md:inline-flex py-3 px-12 rounded-full ${
        buttonType === ButtonType.PRIMARY
          ? 'bg-midnight text-white dark:bg-gray-200 dark:text-midnight'
          : buttonType === ButtonType.SECONDARY
          ? 'bg-gray-200 dark:bg-midnight text-midnight dark:text-white'
          : null
      } items-center justify-center general-ring-state`}
      onClick={() => onButtonClick()}
    >
      {children}
    </button>
  );
};
