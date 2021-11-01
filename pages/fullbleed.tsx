import Image from 'next/image';

export default function FullBleedPage() {
  return (
    <main className="wrapper mx-auto prose prose-lg">
      <h1>Some heading</h1>
      <p>Some content and stuff</p>
      <div className="full-bleed">
        <Image
          objectFit="contain"
          width={1080}
          height={810}
          src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_cntraveler.png,fl_progressive,g_face,h_450,q_80,w_800/v1467328944/cntraveler_visiting-the-shire-by-drone.jpg"
          alt="The Shire"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        consectetur quam vitae sollicitudin commodo. Pellentesque ac quam eget
        odio pellentesque tempor. Nullam ultrices egestas enim a suscipit.
        Aenean dui odio, sollicitudin id mauris nec, porta tempus nisi. Donec
        vitae dolor ante. Morbi efficitur est nec eros placerat egestas. Mauris
        luctus leo metus, viverra porttitor ipsum pulvinar a. Vestibulum nec
        urna felis. Nullam ut sem interdum, fringilla massa a, cursus lorem.
        Nullam vehicula urna vel lobortis auctor. Sed in hendrerit turpis.
        Mauris elit lectus, hendrerit ac velit ac, scelerisque viverra augue.
        Nullam hendrerit felis eget risus consectetur, non hendrerit lacus
        aliquet. Cras vel interdum tortor. Nam nisi lectus, semper feugiat
        volutpat sed, commodo id velit. Aenean eget gravida orci. Nunc ex est,
        tempor vel orci et, porta ullamcorper purus. Sed consequat, nunc ut
        tempor elementum, velit mauris hendrerit nunc, ac dapibus lacus leo et
        urna. Aliquam erat volutpat. In ligula lectus, tempor eget rhoncus et,
        bibendum non leo. Donec eu orci velit. Fusce viverra risus sit amet enim
        feugiat fringilla in vel odio. Nulla at quam nec nisi scelerisque
        hendrerit. Praesent bibendum risus vestibulum libero gravida, eget
        pellentesque lorem lacinia. Nullam vitae mollis enim, et suscipit
        tortor. Morbi placerat aliquet risus, id scelerisque urna ultrices eget.
        Integer rutrum convallis pharetra. Aliquam tristique, est quis gravida
        lobortis, magna orci aliquam enim, ut laoreet risus enim at magna.
      </p>
      {/* <pre className="full-bleed">
        <code className="full-bleed">hello</code>
      </pre> */}
    </main>
  );
}
