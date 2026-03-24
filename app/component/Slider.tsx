"use client";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  animate,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const items = [
  {
    id: 1,
    url: "/home/slider-1.jpg",
    title: "MAXX PHAM",
    des: "I recently joined the local tennis club, and I have to say, it's been a great experience so far! The facilities are well-maintained, with several courts that are always in good condition. I appreciate that they have both indoor and outdoor options, so I can play regardless of the weather gives everyone a chance to participate, whether you're just starting out or have been playing for years.",
  },
  {
    id: 2,
    url: "/home/slider-2.jpg",
    title: "ALEX MANN",
    des: "I recently started taking tennis lessons with Coach Mike, and I have to say, it’s been a fantastic experience! From the very first lesson, he made me feel comfortable on the court. He has a way of breaking down techniques so that even beginners like me can understand them. His approach is really encouraging; he highlights what I'm doing well while also giving me tips for improvement. Each session is fun yet focused, and I appreciate how he tailors the drills to fit my skill level. Plus, he’s super patient, which is exactly what I needed as a newbie.",
  },
  {
    id: 3,
    url: "/home/slider-3.jpg",
    title: "AUSIZE MAM",
    des: "I started taking lessons with Coach Alex a few months ago, and I can't recommend him enough! From the very first session, he was warm and welcoming, making it easy to feel comfortable on the court. His teaching style is fantastic.What I really appreciate is how patient he is. Even when I struggle with a particular shot, he encourages me and gives clear feedback without making me feel discouraged. Every lesson feels productive because he focuses on what I need to work on while still keeping things fun.",
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

function Thumbnails({
  index,
  setIndex,
}: {
  index: number;
  setIndex: (index: number) => void;
}) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="col-span-12 lg:col-span-4 max-lg:ml-[55%] max-lg:-translate-x-1/2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <div className="flex gap-1" style={{ width: "fit-content" }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="shrink-0 flex flex-col items-center"
          >
            {/* Image */}
            <div className="w-full h-35 overflow-hidden rounded">
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title BELOW image */}
            <p
              className={`mt-2 text-sm text-center text-black transition-all duration-300 text-lg font-medium ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {item.title}
            </p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}

function Slider() {
  const [index, setIndex] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, {
        type: "spring",
        stiffness: 300,
        damping: 30,
      });
    }
  }, [index, x, isDragging]);

  return (
    <div className="template">
      <div className="grid grid-cols-12 items-start">
        <Thumbnails index={index} setIndex={setIndex} />
        {/* Main Carousel */}
        <div
          className="col-span-12 lg:col-span-8 relative overflow-hidden rounded-lg"
          ref={containerRef}
        >
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(e, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;

              // If fast swipe, use velocity
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              }
              // Otherwise use offset threshold (30% of container width)
              else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              // Clamp index
              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-full h-[16rem] xl:h-[13.5rem]"
              >
                <h3 className="text-black max-lg:mx-[1rem] text-xs lg:text-lg xl:text-xl">
                  {item.des}
                </h3>
              </div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 top-[85%] xl:top-[85%] -translate-y-1/2 w-5 sm:w-10 h-5 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-green-400 hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Next Button */}
          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute right-4 top-[85%] xl:top-[85%] -translate-y-1/2 w-5 sm:w-10 h-5 sm:h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-green-400 hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
