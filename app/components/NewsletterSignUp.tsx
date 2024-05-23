export function NewsletterSignUp() {
  return (
    <div className="relative overflow-x-clip">
      <div className="bg-dark-primary p-[100px] rounded-2xl">
        <h2 className="text-3xl text-slate-50 mb-4">
          Subscribe to my newsletter
        </h2>
        <p className="text-[#878789] text-base w-[336px] mb-12">
          A periodic update about my life, recent blog posts, how-tos, and
          discoveries.
        </p>
        <input
          type="email"
          placeholder="bobloblaw@gmail.com"
          className="w-[425px] mb-[59px]"
        />
        <p className="text-[#878789] text-base">
          <span className="font-bold text-slate-50">NO SPAM.</span> I never send
          spam. You can unsubscribe at any time!
        </p>
        <img
          className="w-[475px] absolute -top-8 -right-10"
          src="/bcoyerlogo_dark.svg"
          alt="Braydon's Logo"
        />
      </div>
    </div>
  );
}
