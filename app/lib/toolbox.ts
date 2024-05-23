type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
};

type SoftwareDataItem = {
    title: string;
    imgSrc: string;
    link: string;
}

const softwareData: SoftwareDataItem[] = [
  {
    title: "Raycast",
    imgSrc: "/raycast_logo.png",
    link: "https://www.raycast.com/",
  },
  {
    title: "Obsidian",
    imgSrc: "/obsidian_logo.png",
    link: "https://obsidian.md/",
  },
  {
    title: "Notion",
    imgSrc: "/notion_logo.png",
    link: "https://www.notion.so/",
  },
  {
    title: "Tana",
    imgSrc: "/tana_logo.png",
    link: "https://tana.inc/",
  },
  {
    title: "VSCode",
    imgSrc: "/vscode_logo.png",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "Spotify",
    imgSrc: "/spotify_logo.png",
    link: "https://www.spotify.com/",
  },
  {
    title: "Figma",
    imgSrc: "/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "Things 3",
    imgSrc: "/things3_logo.png",
    link: "https://culturedcode.com/things/",
  },
  {
    title: "Fantastical",
    imgSrc: "/fantastical_logo.png",
    link: "https://flexibits.com/fantastical",
  },
  {
    title: "1Password",
    imgSrc: "/1password_logo.png",
    link: "https://1password.com/",
  },
  {
    title: "Arc",
    imgSrc: "/arc_logo.png",
    link: "https://arc.net/",
  },
  {
    title: "mymind",
    imgSrc: "/mymind_logo.png",
    link: "https://mymind.com/",
  },
  {
    title: "Framer",
    imgSrc: "/framer_logo.png",
    link: "https://www.framer.com/",
  },
  {
    title: "Cleanshot X",
    imgSrc: "/cleanshotx_logo.png",
    link: "https://getcleanshot.com/",
  },
  {
    title: "PixelSnap 2",
    imgSrc: "/pixelsnap2_logo.png",
    link: "https://getpixelsnap.com/",
  },
  {
    title: "Linear",
    imgSrc: "/linear_logo.png",
    link: "https://linear.app/",
  },
];

const hardwareData: HardwareDataItem[] = [
  {
    title: "MacBook Pro (16 inch), 2021",
    description:
      "10-core CPU, 16-core GPU, 16-core Neural Engine, 32GB unified memory, 2TB SSD storage",
    link: "https://www.apple.com/shop/buy-mac/macbook-pro/16-inch",
  },
  {
    title: "Zoom65 Mechanical Keyboard",
    description:
      "With a navy blue finish, this 65% custom mechanical keyboard has Oil King linear switches topped with GMK Hennessey keycaps",
    link: "https://zoom65.com/",
  },
  {
    title: "GIGABYTE M27Q-X 27 Monitor",
    description: "A 240Hz 1440P KVM monitor that I use for work and gaming.",
    link: "https://www.gigabyte.com/Monitor/M27Q-X-rev-10#kf",
  },
  {
    title: "Autonomous ErgoChair 2",
    description:
      "A fully adjustable, completely supportive, and super breathable desk chair in a black and white finish. Expensive, but an investment that has been worth it.",
    link: "https://www.autonomous.ai/office-chairs/ergonomic-chair?option_code=ErgonomicChair-ErgoChairPro_ChairColor.BlackWhite",
  },
  {
    title: "Autonomous SmartDesk DIY Standing Desk",
    description:
      "A standing desk frame in a white finish. Topped with the IKEA Karlby tabletop, the desk measures almost 9’ wide, providing lots of space.",
    link: "https://www.autonomous.ai/standing-desks/diy-smart-desk-kit?option_code=DiySmartDeskKit-FrameSmartDesk2_DeskFrame.White,Model.Proframe",
  },
  {
    title: "Wave DX Dynamic Microphone",
    description:
      "A dynamic mic that captures detail like a condenser without the noise, Wave DX is a remarkable feat of audio engineering.",
    link: "https://www.elgato.com/us/en/p/wave-dx-dynamic-microphone",
  },
  {
    title: "Stream Deck +",
    description:
      "Iconic Stream Deck tech with customizable LCD keys, dials, and touch strip.",
    link: "https://www.elgato.com/us/en/p/stream-deck-plus-black",
  },
  {
    title: "Key Light MK.2",
    description:
      "Ultra-bright and dimmable. Space-saving and built to last. App-controlled and destined to evolve with you.",
    link: "https://www.elgato.com/us/en/p/key-light",
  },
  {
    title: "HD60 X Capture Card",
    description:
      "HD60 X lets you capture PS5 or Xbox gameplay like a pro. Stream or record high resolution content for audiences on any platform.",
    link: "https://www.elgato.com/us/en/p/game-capture-hd60-x",
  },
];

export {
    hardwareData,
    softwareData,
}
