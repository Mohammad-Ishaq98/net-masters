"use client";
import { motion, Variants } from "framer-motion";
import CustomButtons from "./component/CustomButtons";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin, Smartphone } from "lucide-react";
import Slider from "./component/Slider";
import Calender from "./component/Calender";
import CounterOnScroll from "./component/CounterOnScroll";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Accordion from "./component/Accordion";

// who are we start animation
const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// our programmes start animation

const appearBottom1: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const appearBottom2: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const appearBottom3: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.6, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      {/* hero section start*/}
      <section className="hero-bg max-lg:bg-black/50">
        {/* top section */}
        <div className="template">
          <div className="grid grid-cols-12 py-[2.5rem] md:py-[8rem]">
            <div className="col-span-12 lg:col-span-8">
              <div className="hero_right_text">
                <p className="text-sm md:text-lg mb-[0.45rem]  lg:text-white">
                  Premium Court and Couching{" "}
                </p>
                <h1 className="text-2xl md:text-5xl xl:text-7xl lg:text-white mb-[1rem] md:mb-[5rem]">
                  Keep your body in <br className="hidden lg:inline-block" />{" "}
                  shape with rigorous <br className="hidden lg:inline-block" />{" "}
                  trainning session
                </h1>
                <button className="hero_btn">Book Now</button>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex justify-end">
              <div className="hero_left_text mt-[3rem]">
                <p className="text-xl md:text-2xl mb-[1rem]">
                  Open also for pickleball and table tennis
                </p>
                <p className="text-xs md:text-sm lg:text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
                  dolore vitae porro fugit ratione doloremque, hic itaque veniam
                  nisi laudantium aperiam nemo repudiandae exercitationem minus?
                  Qui eaque nostrum doloribus autem?
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="sm:mx-[1rem] md:mx-[5rem] flex sm:justify-between max-sm:flex-col">
          <div className="left flex text-xs md:text-xl md:justify-around">
            <a href="#who" className="text-black">
              Scroll Down
            </a>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </motion.svg>
          </div>

          <div className="right">
            <div className="social_wrapper text-xs md:text-lg lg:text-xl space-x-[.5rem] md:space-x-[2.5rem] max-md:mt-5">
              <Link href="#">Instagram</Link>
              <Link href="#">YouTube</Link>
              <Link href="#">Facebook</Link>
              <Link href="#">X (Former Twitter)</Link>
            </div>
          </div>
        </div>
      </section>
      {/* hero section end*/}

      {/* who are we start */}
      <section id="who" className="bg-white py-[3rem] lg:py-[7rem]">
        <div className="template">
          <div className="text-center">
            <p className="text-lg text-black mb-[2rem] lg:mb-[5rem]">
              Who are we
            </p>
          </div>
          <div className="grid grid-cols-12">
            <motion.div
              className="col-span-12 lg:col-span-6"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="img_wrapper relative h-[25rem] lg:h-[40rem] 2xl:h-[60rem] w-full 2xl:ml-[3.375rem]">
                <Image
                  src="/home/who-r-we-left.jpg"
                  className="object-contain"
                  alt="who-r-we-left"
                  fill
                />
              </div>
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              className="col-span-12 lg:col-span-6"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-black text-xl lg:text-2xl max-lg:text-center font-montserrat font-bold">
                Everyone is welcome at our tennis club!
              </h3>

              <p className="mt-[0.8rem] lg:mt-[2rem] text-black max-lg:text-center text-sm lg:text-xl mb-[1.5rem] lg:mb-[5rem] 2xl:mb-[10rem]">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit <br className="hidden lg:inline-block" />
                aspernatur aut odit aut fugit.
              </p>

              <div className="img_wrapper relative h-[25rem] lg:h-[40rem] 2xl:h-[60rem] w-full 2xl:-ml-[3.375rem]">
                <Image
                  src="/home/who-r-we-right.jpg"
                  className="object-contain"
                  alt="who-r-we-right"
                  fill
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* who are we end */}

      {/* our programmes start */}
      <section className="relative bg-[url('/home/our-programme.jpg')] bg-no-repeat bg-cover bg-center w-full before:absolute before:inset-0 before:bg-green-400 before:opacity-75 py-[2rem] lg:py-[10rem]">
        <div className="template relative z-100">
          <div className="text-center">
            <p className="text-white text-sm lg:text-lg">Our Programme</p>
            <h3 className="text-white text-2xl lg:text-3xl xl:text-4xl my-[1rem] font-extrabold">
              Find the one for you
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <motion.div
              className="w-full max-w-sm"
              variants={appearBottom1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="group relative max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
                <div className="relative h-[30rem] lg:h-[40rem]">
                  <div className="absolute inset-0">
                    <img
                      src="/home/our-programme-1.jpg"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="relative z-10 text-white text-xl transition duration-200 bottom-[-80%] left-[7%] group-hover:bottom-[-75%]">
                    Tennis Camp
                  </h3>
                </div>
                {/* Overlay */}
                <div
                  className="
                  absolute inset-0 flex flex-col justify-end p-6
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  bg-[linear-gradient(90deg,rgba(175,214,57,0.6)_0%,rgba(88,149,129,1)_100%)]
                  "
                >
                  <div
                    className="
                    translate-y-4 group-hover:translate-y-0
                    transition-transform duration-300
                    space-y-2
                    "
                  >
                    <p className="text-white">Camp Price goes here.</p>

                    <div className="text-xl font-bold text-white">$29.99</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full max-w-sm"
              variants={appearBottom2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="group relative max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
                <div className="relative h-[30rem] lg:h-[40rem]">
                  <div className="absolute inset-0">
                    <img
                      src="/home/our-programme-2.jpg"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="relative z-10 text-white text-xl transition duration-200 bottom-[-80%] left-[7%] group-hover:bottom-[-75%]">
                    Stay & Play
                  </h3>
                </div>
                {/* Overlay */}
                <div
                  className="
                  absolute inset-0 flex flex-col justify-end p-6
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  bg-[linear-gradient(90deg,rgba(175,214,57,0.6)_0%,rgba(88,149,129,1)_100%)]
                  "
                >
                  <div
                    className="
                    translate-y-4 group-hover:translate-y-0
                    transition-transform duration-300
                    space-y-2
                    "
                  >
                    <p className="text-white">Stay & Play goes here.</p>

                    <div className="text-xl font-bold text-white">$29.99</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full max-w-sm max-md:ml-[0%] max-lg:ml-[105%] "
              variants={appearBottom3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="group relative max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
                <div className="relative h-[30rem] lg:h-[40rem]">
                  <div className="absolute inset-0">
                    <img
                      src="/home/our-programme-3.jpg"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="relative z-10 text-white text-xl transition duration-200 bottom-[-80%] left-[7%] group-hover:bottom-[-75%]">
                    Adult Programme
                  </h3>
                </div>
                {/* Overlay */}
                <div
                  className="
                  absolute inset-0 flex flex-col justify-end p-6
                  opacity-0 group-hover:opacity-100
                  transition-all duration-300
                  bg-[linear-gradient(90deg,rgba(175,214,57,0.6)_0%,rgba(88,149,129,1)_100%)]
                  "
                >
                  <div
                    className="
                    translate-y-4 group-hover:translate-y-0
                    transition-transform duration-300
                    space-y-2
                    "
                  >
                    <p className="text-white"> Adult Programme goes here.</p>

                    <div className="text-xl font-bold text-white">$29.99</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col items-center justify-center mt-[4rem] lg:mt-[10rem]">
            <div className="w-15 h-15 bg-amber-50 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/home/paper-plane.png"
                alt="paper-plane"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-[1.5rem] md:text-[2rem] xl:text-[3rem] font-semibold lg:mt-[2rem] xl:mt-[5rem] text-center">
              Get the best blog stories <br />
              into your inbox!
            </h3>

            <div className="input_wrapper flex">
              <Mail className="" />
              <input
                type="text"
                placeholder="Enter your email address"
                className="
                ml-4
                w-full
                font-bold
                text-lg
                xl:text-xl
                text-white
                border-b border-white/50
                outline-none
                pb-2
                transition-all duration-300
              focus:border-white
                focus:border-b-2
                "
              />

              <CustomButtons
                title=""
                btnType="button"
                containerStyles="
                ml-[1rem] cursor-pointer
                "
                handleClick={() => {}}
              >
                <ArrowRight />
              </CustomButtons>
            </div>

            <div className="flex mt-5">
              <input type="checkbox" id="" name="" value="" />
              <label className="ml-5">
                I agree to the{" "}
                <a href="/privacy-policy/" target="_blank">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
        </div>
      </section>
      {/* our programmes end */}

      {/* vdo section start */}
      <section className="h-auto sm:h-screen w-full">
        <video
          className="w-full h-1/2 sm:h-full object-cover"
          controls
          preload="none"
          poster="/home/video/poster.jpg"
        >
          <source src="/home/video/tennis-play.mp4" type="video/mp4" />
        </video>
      </section>
      {/* vdo section end */}

      {/* slider start */}
      <section className="py-[2.4rem] lg:py-[5rem] bg-white">
        <Slider />
      </section>
      {/* slider end */}

      {/* Contact us start */}
      <section className="bg-amber-50 py-[0rem] lg:py-[4rem]">
        <div className="template">
          <div className="grid grid-cols-12 max-xl:gap-x-6">
            <div className="col-span-12 lg:col-span-5">
              <Calender />
            </div>
            <div className="col-span-12 lg:col-span-7 text-[#423333] text-center lg:text-left">
              <p className="text-sm lg:text-lg max-lg:mt-10">Contact us</p>

              <h3 className="my-[1rem] text-2xl lg:text-3xl xl:text-5xl">
                Signup for your first class
              </h3>

              <p className="mb-[1.256rem] text-lg lg:text-xl lg:font-semibold ">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. <br /> Ut enim ad minim.
              </p>

              <div className="location_wrapper max-lg:ml-[50%] max-lg:-translate-x-[50%] text-lg lg:text-xl space-y-5">
                <div className="flex ">
                  <MapPin />{" "}
                  <p className="ml-[1rem] text-xs sm:text-xl">
                    11792 London Rd, Derby, CA 43117, US
                  </p>
                </div>
                <div className="flex">
                  <Smartphone />{" "}
                  <p className="ml-[1rem] text-xs sm:text-xl">
                    +88 015 81*******
                  </p>
                </div>
                <div className="flex">
                  <Mail />{" "}
                  <p className="ml-[1rem] text-xs sm:text-xl">
                    specimen@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-[4rem]">
            <CounterOnScroll />
          </div>
        </div>
      </section>
      {/* Contact us end */}

      {/* Q & A start  */}
      <section className="bg-white py-[0.8rem] md:py-[4rem]">
        <div className="template">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-40 max-lg:gap-y-3 items-center">
            <div className="left">
              <div className="text_box">
                <p className="text-sm sm:text-lg text-black">q&a</p>
                <h3 className="text-xl sm:text-3xl lg:text-5xl text-black my-[1rem]">
                  We're proud to be the{" "}
                  <br className="hidden xl:inline-block" /> best at training
                </h3>
              </div>
              <Accordion />
            </div>

            <div className="right relative max-sm:mb-60">
              <div className="img_wrapper relative h-[18rem] sm:h-[28rem] w-full">
                <Image
                  src="/home/q&a.jpg"
                  fill
                  alt="two practicing person"
                  className="object-contain"
                />
              </div>

              <div className="two_div flex flex-row">
                <div className="secondary_color bg-secondary pl-2 sm:pl-3 pr-3 sm:pr-6 py-5 absolute left-[0%] sm:left-[52%] top-[80%] sm:top-[61%]">
                  <p className="text-sm md:text-lg">Coaches</p>
                  <p className="text-lg md:text-2xl">100 +</p>
                  <p className="text-sm md:text-lg">
                    Sed do eiusmod ipiscing elit
                  </p>
                </div>
                <div className="secondary_color bg-black pl-1.5 sm:pl-3 pr-3 sm:pr-6 py-5 absolute left-[8%] lg:-left-[10%] top-[124%] sm:top-[73%] md:top-[80%] lg:top-[90%]">
                  <p className="text-sm md:text-lg">Coaches</p>
                  <p className="text-lg md:text-2xl">100 +</p>
                  <p className="text-sm md:text-lg">
                    Sed do eiusmod ipiscing elit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Q & A end  */}

      {/* blog start */}
      <section className="relative bg-[url('/home/blog.jpg')] bg-no-repeat bg-cover bg-center w-full before:absolute before:inset-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#d3fb0a] before:to-[#232a01] before:opacity-75 py-[2.5rem] lg:py-[5rem] ">
        <div className="template relative z-100">
          <div className="text-center">
            <p className="text-white text-sm xl:text-lg">From The Blog</p>
            <h2 className="text-white text-3xl xl:text-5xl mt-2 mb-10">
              {" "}
              Latest articles
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 max-lg:gap-y-5">
            <div className="card card-border bg-white">
              <div className="card-body py-[0.5rem] lg:py-[4rem] pl-6 lg:pl-5 xl:pl-10 pr-3.5 lg:pr-5 xl:pr-10">
                <h2 className="card-title text-black text-xl xl:text-2xl">
                  How to Prepare yourself
                </h2>
                <p className="text-gray-500 text-sm xl:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                  quisquam autem similique facilis iusto? Tempore quisquam,
                  error doloribus voluptate sed distinctio, aperiam assumenda
                  consectetur nostrum, ullam mollitia! Pariatur, nam sint?
                </p>
                <div className="card-actions justify-end mt-5 lg:mt-10">
                  <motion.div
                    whileHover={{ x: 8 }} // optional: moves the arrow a bit to the right
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ArrowRight
                      className="size-10 text-black transition-all duration-300 
                 hover:size-10 hover:w-16"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="card card-border bg-white">
              <div className="card-body py-[0.5rem] lg:py-[4rem] pl-6 lg:pl-5 xl:pl-10 pr-3.5 lg:pr-5 xl:pr-10">
                <h2 className="card-title text-black text-xl xl:text-2xl">
                  Pass training with modern way!
                </h2>
                <p className="text-gray-500 text-sm xl:text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  ducimus a aut tempore quas qui nisi placeat praesentium
                  doloribus eaque, expedita culpa quisquam mollitia maxime animi
                  magnam repellat explicabo reiciendis!
                </p>
                <div className="card-actions justify-end mt-5 lg:mt-10">
                  <motion.div
                    whileHover={{ x: 8 }} // optional: moves the arrow a bit to the right
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ArrowRight
                      className="size-10 text-black transition-all duration-300 
                 hover:size-10 hover:w-16"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="card card-border bg-white">
              <div className="card-body py-[0.5rem] lg:py-[4rem] pl-6 lg:pl-5 xl:pl-10 pr-3.5 lg:pr-5 xl:pr-10">
                <h2 className="card-title text-black text-xl xl:text-2xl">
                  Luxury Courts with comfy way
                </h2>
                <p className="text-gray-500 text-sm xl:text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam, laudantium. Exercitationem, ab excepturi. Magni
                  sapiente quisquam sunt molestiae possimus? Aut ea deleniti
                  illo magnam atque quam blanditiis enim voluptatem nisi?
                </p>
                <div className="card-actions justify-end mt-5 lg:mt-10">
                  <motion.div
                    whileHover={{ x: 8 }} // optional: moves the arrow a bit to the right
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <ArrowRight
                      className="size-10 text-black transition-all duration-300 
                 hover:size-10 hover:w-16"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </>
  );
}
