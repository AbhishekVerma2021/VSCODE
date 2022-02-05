import React from "react";
import CARD from './CARD';
import NAV from "./Nav";
import './index.css';
function app() {
  return (
    <>
      <NAV/>
      <CARD imgsrc="https://wallpaperaccess.com/full/1605503.jpg" ottname="A Netfilx Original" sname="DARK" slink="https://www.netflix.com/in/title/80100172" />
      <CARD imgsrc="https://timesofindia.indiatimes.com/thumb/74612306.cms?width=219&height=317&quality=80&imgsize=25656" ottname="MX Player" sname="Bhaukaal" slink="https://www.mxplayer.in/show/watch-bhaukaal/season-2/episode-1-online-eeee5e4d7fdf623b143ecfb73683bb42?utm_source=paid-ext-con-perf-google_sem-web&utm_medium=web&utm_campaign=sem-web-190122-traffic-nbr-web_series-Thriller-BhaukaalS2-Hindi-ext_paid-na-na-pan-originals-mxo-groupm-exact-sng&utm_cid=129111842621&gclid=Cj0KCQiA3fiPBhCCARIsAFQ8QzVOE7-PGJg9Ia79BdxmGS5w7ZVCArYZznKTDv9-OgTgMuUNMXcTA44aAv7xEALw_wcB" />
      <CARD imgsrc="https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg" ottname="A Netflix Original" sname="Money hiest" slink="https://www.netflix.com/in/title/80192098" />
    </>
  );
}
export default app;