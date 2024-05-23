type PageTitleProps = {
  title: string;
};
export function PageTitle({ title }: PageTitleProps) {
  return (
    <h1 className="mx-auto text-text-primary w-[710px] text-center text-balance font-bold text-6xl leading-[72px] tracking-tighter">
      {title}
    </h1>
  );
}
