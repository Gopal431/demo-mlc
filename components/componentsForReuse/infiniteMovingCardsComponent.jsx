"use client";
import React from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
// import '../../App.css';
import ANMS from '../../public/Assts/ANMS.jpeg'
import BKGC from '../../public/Assts/BKGC.jpeg'
import DNBS from '../../public/Assts/DNBS.png'
import MDS from '../../public/Assts/MDS.jpeg'
import NMS from '../../public/Assts/NMS.png'
import NOPANY from '../../public/Assts/NOPANY.jpeg'
import NPS from '../../public/Assts/NPS.png'
import SDLC from '../../public/Assts/SDLC.jpeg'
import STJNS from '../../public/Assts/STJNS.png'
import TECHNO from '../../public/Assts/TECHNO.jpeg'
import TRINITY from '../../public/Assts/TRINITY.png'
import VEDANTA from '../../public/Assts/VEDANTA.png'
import VKS from '../../public/Assts/VKS.jpeg'
import BIMS from '../../public/Assts/BIMS.jpeg'

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
      pauseOnHover={true}
    />
  </div>
  );
}

const testimonials = [
  {
    img: TRINITY,
    name: "Trinity Public School"
  },
  {
    img: BIMS,
    name: "Bharatiya Vidya Bhavan"
  },
  {
    img: NMS,
    name: "National Model School Sodepur"
  },
  {
    img: MDS,
    name: "Maria's Day School Ramrajatala"
  },
  {
    img: VKS,
    name: "Vikramshila Academy"
  },
  {
    img: MDS,
    name: "Maria's Day School Mourigram"
  },
  {
    img: DNBS,
    name: "Don Bosco School, Malda"
  },
  {
    img: MDS,
    name: "Maria's International School Boinchi"
  },
  {
    img: ANMS,
    name: "Authpur National Model High School"
  },
  {
    img: MDS,
    name: "Maria's Day School South Howrah"
  },
  {
    img: VEDANTA,
    name: "The Vedanta Academy"
  },
  {
    img: STJNS,
    name: "St. John's Public School"
  },
  {
    img: MDS,
    name: "Maria's Day School Shibpur"
  },
  {
    img: TECHNO,
    name: "Techno India Group Public School, Krishnanagar"
  },
  {
    img: MDS,
    name: "Maria's Day School Howrah"
  },
  {
    img: TECHNO,
    name: "Techno India Group Public School, Sodepur"
  },
  {
    img: NPS,
    name: "National Progressive School"
  },
  {
    img: NOPANY,
    name: "Nopany Institute of Healthcare Studies"
  },
  {
    img: SDLC,
    name: "SD Law College"
  },
  {
    img: BKGC,
    name: "Bijoy Krishna Girls College"
  },
  {
    img: NOPANY,
    name: "Nopany Institute of Management Studies"
  },
];
