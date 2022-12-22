import besnik from "../assets/images/card-cover/besnik.jpg";
import expice from "../assets/images/card-cover/expice.jpg";
import fitClub from "../assets/images/card-cover/fitclub.jpg";
import gfox from "../assets/images/card-cover/gfox.jpg";
import hacks from "../assets/images/card-cover/hacks.jpg";
import houseToHome from "../assets/images/card-cover/house-to-home.jpg";
import mcafee from "../assets/images/card-cover/mcafee.jpg";

export type Card = {
  img: string;
  title: string;
  description: string;
  href: string;
  isLiveMsg?: string;
};

export const cards: Card[] = [
  {
    img: gfox,
    title: "GFOX",
    description:
      "This landing page is for an NFT collection called GFOX. Made in React.js and has many interactive animations and sliders. Users of Android and Apple can conveniently use it on mobile, tablets, and desktops. I clone this website for the internet",
    href: "https://gfox-danishsjjd.netlify.app/",
  },
  {
    img: hacks,
    title: "Hacks",
    description:
      "This website is created in ReactJs. I clone this website for the internet",
    href: "https://hacks-danishsjjd.netlify.app/",
  },
  {
    img: fitClub,
    title: "Fit Club",
    description:
      "This website is for fitness club. I implement CSS, animations, and slider to make user experience better so user spend there most of time. It works on both Android and iOS",
    href: "https://fitclub-danishsjjd.netlify.app/",
  },
  {
    img: expice,
    title: "Expice",
    description:
      "This is a food ordering app you can buy food & it's fully responsive. I found this design on the internet and challenge myself to create this design and functionality.",
    href: "https://expice-danishsjjd.netlify.app/",
  },
  {
    img: houseToHome,
    title: "House To Home",
    description:
      "This is a full-stack website I create using Reactjs, tailwindcss for the front-end, and for the backend, I use nodejs & expressJs for API, and for the payment method, I use stripe. This website also has an admin dashboard so the admin can add, delete or update products and also admin can remove users and reviews from products. It works on both Android and iOS. You can buy, review or track your product and much more",
    href: "https://house-to-home.herokuapp.com/",
    isLiveMsg: "This Website is under construction",
  },
  {
    img: besnik,
    title: "Besnik",
    description:
      "This website is developed in ReactJs, you can easily buy or rent a house. It works on both Android and iOS.",
    href: "https://besnik-danishsjjd.netlify.app/",
  },
  {
    img: mcafee,
    title: "Mcafee",
    description:
      "This website is created in ReactJs. I clone this website for the internet",
    href: "https://mcafee-danishsjjd.netlify.app/",
  },
];
