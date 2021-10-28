import { Container } from 'layouts/Container';

export default function Home() {
  return (
    <Container>
      <div>
        Welcome to my portfolio
        <div className="relative py-16">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
              <h1>
                <span className="block text-base text-center text-orange-600 dark:text-pink-500 font-semibold tracking-wide uppercase">
                  Introducing
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
                  next themes demo
                </span>
              </h1>
              <p className="mt-8 leading-8">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <h2>TESTING</h2>
              <p>
                Faucibus commodo massa rhoncus, volutpat.{' '}
                <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                praesent donec est. Odio penatibus risus viverra tellus varius
                sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                Dignissim sed eget risus enim.{' '}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis
                id.
              </p>
              <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque
                orci. Donec commodo sit viverra aliquam porttitor ultrices
                gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
                justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
                Amet, duis sed elit interdum dignissim.
              </p>
              <blockquote>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </blockquote>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
            <div className="mt-6 mx-auto">
              <p>
                Faucibus commodo massa rhoncus, volutpat.{' '}
                <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
                Mattis mauris semper sed amet vitae sed turpis id. Id dolor
                praesent donec est. Odio penatibus risus viverra tellus varius
                sit neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                Dignissim sed eget risus enim.{' '}
                <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis
                id.
              </p>
              <ul>
                <li>Quis elit egestas venenatis mattis dignissim.</li>
                <li>
                  Cras cras lobortis vitae vivamus ultricies facilisis tempus.
                </li>
                <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
              </ul>
              <p>
                Quis semper vulputate aliquam venenatis egestas sagittis quisque
                orci. Donec commodo sit viverra aliquam porttitor ultrices
                gravida eu. Tincidunt leo, elementum mattis elementum ut nisl,
                justo, amet, mattis. Nunc purus, diam commodo tincidunt turpis.
                Amet, duis sed elit interdum dignissim.
              </p>
              <blockquote>
                <p>
                  Sagittis scelerisque nulla cursus in enim consectetur quam.
                  Dictum urna sed consectetur neque tristique pellentesque.
                  Blandit amet, sed aenean erat arcu morbi.
                </p>
              </blockquote>
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit.
              </p>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center w-full h-16 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    </Container>
  );
}
