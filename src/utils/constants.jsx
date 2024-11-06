export const LOGO='https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png';

export const USER_Avatar="https://images.unsplash.com/photo-1628563694622-5a76957fd09c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
    },
  };


export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

export const BG_URL="https://wallpapercave.com/wp/wp1917128.jpg"
  

export const SUPPORTED_LANGUAGES=[
  {identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"},
];


export const OPEN_API=import.meta.env.VITE_OPEN_API;
