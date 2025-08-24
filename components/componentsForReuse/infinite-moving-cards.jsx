"use client"

import React, { useEffect, useState } from "react";
import { cn } from "./Utils/cs";
import Image from "next/image";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "120s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          <li
            key={index}
            className="flex-shrink-0 px-4 py-2"
          >
            {/* Mobile View: Logo on top, name below */}
            <div className="flex flex-col items-center gap-1 md:hidden">
              <Image
                src={item.img}
                alt={item.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-black text-center">{item.name}</span>
            </div>

            {/* Desktop View: Card Style */}
            <div className="hidden md:block w-[200px] md:w-[250px] max-w-full relative rounded-xl border border-b-0 px-4 py-4">
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <div className="relative z-20 mt-4 flex items-center flex-col">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <p className="flex flex-col gap-1 text-center">
                    <span className="text-base mt-2 leading-[1.4] text-black font-medium">
                      {item.name}
                    </span>
                  </p>
                </div>
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
