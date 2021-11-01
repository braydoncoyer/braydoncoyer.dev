import { Container } from 'layouts/Container';

export default function Home() {
  return (
    <Container>
      <h1>
        <span className="block text-base text-center text-orange-600 dark:text-pink-500 font-semibold tracking-wide uppercase">
          Introducing
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Braydon's New Portfolio
        </span>
      </h1>
      <p className="mt-8 leading-8">
        Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
        arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
        feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
        Eleifend egestas fringilla sapien.
      </p>
      <p>
        Now I'm just writing placeholder content to try out the different blocks
        available. How about <a href="#">a link</a>, <strong>bold text</strong>,{' '}
        <s>strikethrough text</s>,<i>italic text</i> and{' '}
        <code className="bg-indigo-50 dark:bg-indigo-900 py-0.5 px-2 rounded mx-1 inline-block align-middle tracking-tight text-base">
          code
        </code>
        ?
      </p>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <img
        className="full-bleed"
        src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_cntraveler.png,fl_progressive,g_face,h_450,q_80,w_800/v1467328944/cntraveler_visiting-the-shire-by-drone.jpg"
        alt="The Shire"
      />
      <ul>
        <li>Bullet list 1</li>
        <li>Bullet list 2</li>
        <li>Bullet list 3</li>
      </ul>
      <ol>
        <li>Numbered list 1</li>
        <li>Numbered list 2</li>
        <li>Numbered list 3</li>
      </ol>
      <input type="checkbox" />
      <blockquote>Testing a quote here! Isn't this nice?</blockquote>
      <hr />
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
    </Container>
  );
}
