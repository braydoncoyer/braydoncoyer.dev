type BorderCardProps = {
  children: React.ReactNode;
};
export function BorderCard({ children }: BorderCardProps) {
  return (
    <div className="flex h-full min-h-[154px] flex-col justify-between rounded-[20px] border border-border-primary p-6">
      {children}
    </div>
  );
}
