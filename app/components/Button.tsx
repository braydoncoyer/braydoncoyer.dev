enum ButtonTypes {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  TERTIARY = "tertiary",
}

type ButtonProps = {
  buttonType?: ButtonTypes;
  label: string;
  clicked?: () => void;
};

export function Button({
  buttonType = ButtonTypes.PRIMARY,
  label,
  clicked,
}: ButtonProps) {
  return (
    <button
      type="button"
      className="rounded-full bg-dark-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-dark-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-primary"
      onClick={clicked}
    >
      {label}
    </button>
  );
}
