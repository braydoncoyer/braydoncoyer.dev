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
      className={`group inline-flex items-center rounded-full px-6 py-1.5 font-semibold transition ${
        buttonType === ButtonType.PRIMARY
          ? 'bg-midnight text-white dark:bg-gray-200 dark:text-midnight hover:bg-slate-700'
          : buttonType === ButtonType.SECONDARY
          ? 'text-midnight dark:text-white'
          : null
      }`}
      onClick={() => onButtonClick()}
    >
      {children}
      <svg
        className={`mt-0.5 ml-2 -mr-1 stroke-2 ${
          buttonType === ButtonType.PRIMARY
            ? 'stroke-white dark:stroke-midnight'
            : 'stroke-midnight dark:stroke-white'
        }`}
        fill="none"
        width="10"
        height="10"
        viewBox="0 0 10 10"
        aria-hidden="true"
      >
        <path
          className="transition opacity-0 group-hover:opacity-100"
          d="M0 5h7"
        ></path>
        <path
          className="transition group-hover:translate-x-[3px]"
          d="M1 1l4 4-4 4"
        ></path>
      </svg>
    </button>
  );
};
