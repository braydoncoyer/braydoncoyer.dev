import { Ad } from '@/components/Ad';

export function StickyColumn({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
      <div className="col-span-8">{children}</div>
      <aside className="hidden lg:inline-block md:sticky md:top-[365px] md:self-start col-span-4 space-y-8">
        <Ad />
      </aside>
    </div>
  );
}
