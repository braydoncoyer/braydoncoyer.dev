type PageTitleProps = {
  title: string;
};
export function PageTitle({ title }: PageTitleProps) {
  return (
    <h1 className="mx-auto text-text-primary text-center text-balance font-medium text-6xl leading-[64px] tracking-tighter">
      {title}
    </h1>
  );
}
