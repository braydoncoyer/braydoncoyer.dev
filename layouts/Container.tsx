import { NavMenu } from '@/components/NavMenu';

export function Container(props) {
  const { children, ...customMeta } = props;

  return (
    <div className="bg-white dark:bg-dark">
      <NavMenu />
      <main
        className={`flex flex-col mx-auto ${
          props?.articlePage ? 'max-w-4xl' : 'max-w-6xl'
        } justify-center px-4 bg-white dark:bg-dark prose prose-lg md:prose-xl dark:prose-dark`}
      >
        {children}
      </main>
    </div>
  );
}
