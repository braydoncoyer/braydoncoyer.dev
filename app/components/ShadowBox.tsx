type ShadowBoxProps = {
  children?: React.ReactNode;
  label?: string;
  width: number;
  height: number;
};
export function ShadowBox({ children, label, width, height }: ShadowBoxProps) {
  return (
    <div className="text-center inline-block group">
      <div
        className="rounded-[20px] border border-border-primary p-2"
        style={{ width, height }}
      >
        <div
          className="border-2 h-full rounded-xl border-[#A5AEB81F]/10 bg-[#EDEEF0] grid place-items-center"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          {children ? children : null}
        </div>
      </div>
      {label ? <p className="text-gray-500 text-sm mt-3">{label}</p> : null}
    </div>
  );
}
