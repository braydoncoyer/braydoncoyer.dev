export function NewsletterSignUp() {
  return (
    <div className="relative overflow-x-clip">
      <div className="bg-dark-primary p-[100px] rounded-2xl">
        <div className="w-2 h-px bg-zinc-300 absolute right-[44.5px] top-[48px] z-20"></div>
        <div className="w-px h-2 bg-zinc-300 absolute right-[48px] top-[44.5px] z-20"></div>

        <div className="w-full h-px bg-zinc-600 absolute left-0 right-0 top-[48px] z-10"></div>
        <div className="w-px h-full bg-zinc-600 absolute right-[48px] top-0 bottom-0 z-10"></div>

        <div className="w-2 h-px bg-zinc-300 absolute left-[44.5px] right-0 top-[48px] z-20"></div>
        <div className="w-px h-2 bg-zinc-300 absolute left-[48px] right-0 top-[44.5px] z-20"></div>

        <h2 className="text-3xl text-slate-50 mb-4 semibold">
          Subscribe to my newsletter
        </h2>
        <p className="text-gray-400 text-base w-[336px] mb-12">
          A periodic update about my life, recent blog posts, how-tos, and
          discoveries.
        </p>
        <input
          type="email"
          placeholder="bobloblaw@gmail.com"
          className="w-[425px] mb-[59px] px-5 py-3 bg-transparent border border-gray-400 rounded-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-slate-100 focus:ring-offset-2 focus:ring-offset-dark-primary"
        />
        <p className="text-[#878789] text-base">
          <span className="font-bold text-slate-50">NO SPAM.</span> I never send
          spam. You can unsubscribe at any time!
        </p>
        <img
          className="w-[500px] absolute -top-8 -right-10"
          src="/bcoyerlogo_dark.svg"
          alt="Braydon's Logo"
        />
        <div className="w-2 h-px bg-zinc-300 absolute right-[44.5px] bottom-[48px] z-20"></div>
        <div className="w-px h-2 bg-zinc-300 absolute right-[48px] bottom-[44.5px] z-20"></div>

        <div className="w-full h-px bg-zinc-600 absolute left-0 right-0 bottom-[48px] z-10"></div>
        <div className="w-px h-full bg-zinc-600 absolute left-[48px] top-0 bottom-0 z-10"></div>

        <div className="w-2 h-px bg-zinc-300 absolute left-[44.5px] right-0 bottom-[48px] z-20"></div>
        <div className="w-px h-2 bg-zinc-300 absolute left-[48px] right-0 bottom-[44.5px] z-20"></div>
      </div>
    </div>
  );
}
