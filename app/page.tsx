"use client";
import { motion, Variants } from "framer-motion";
import CustomButtons from "./component/CustomButtons";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

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
      <section className="bg-[url('/home/home-bg.jpg')] bg-no-repeat bg-cover zoomin h-screen overflow-hidden">
        {/* top section */}
        <div className="template">
          <div className="grid grid-cols-12 py-[8rem]">
            <div className="col-span-8">
              <div className="hero_right_text">
                <p className="text-lg mb-[0.45rem] text-white">
                  Premium Court and Couching{" "}
                </p>
                <h1 className="text-7xl text-white mb-[5rem]">
                  Keep your body in <br className="hidden lg:inline-block" />{" "}
                  shape with rigorous <br className="hidden lg:inline-block" />{" "}
                  trainning session
                </h1>
                <CustomButtons
                  title="Book Now"
                  btnType="button"
                  containerStyles="
                  ml-[1rem]
                  bg-[#5771F5]
                  px-[4.25rem]
                  rounded-lg
                  py-[0.875rem]
                  bg-secondary text-white cursor-pointer
                  "
                  handleClick={() => {}}
                />
              </div>
            </div>
            <div className="col-span-4 flex justify-end">
              <div className="hero_left_text mt-[3rem]">
                <p className="text-2xl mb-[1rem]">
                  Open also for pickleball and table tennis
                </p>
                <p>
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
        <div className="mx-[5rem] flex justify-between">
          <div className="left flex text-xl justify-around">
            <a href="#who">Scroll Down</a>
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
            <div className="social_wrapper space-x-[2.5rem]">
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
      <section id="who" className="bg-white py-[7rem]">
        <div className="template">
          <div className="text-center">
            <p className="text-lg text-black mb-[5rem]">Who are we</p>
          </div>
          <div className="grid grid-cols-12">
            <motion.div
              className="col-span-6"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="img_wrapper relative h-[60rem] w-full ml-[3.375rem]">
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
              className="col-span-6"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-black text-2xl font-montserrat font-bold">
                Everyone is welcome at our tennis club!
              </h3>

              <p className="mt-[2rem] text-black text-xl mb-[10rem]">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit <br className="hidden lg:inline-block" />
                aspernatur aut odit aut fugit.
              </p>

              <div className="img_wrapper relative h-[60rem] w-full -ml-[3.375rem]">
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
      <section className="relative bg-[url('/home/our-programme.jpg')] bg-no-repeat bg-cover bg-center w-full before:absolute before:inset-0 before:bg-green-400 before:opacity-75 py-[10rem]">
        <div className="template relative z-100">
          <div className="text-center">
            <p className="text-white text-lg">Our Programme</p>
            <h3 className="text-white text-4xl my-[1rem] font-extrabold">
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
                <div className="relative h-[40rem]">
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
                <div className="relative h-[40rem]">
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
              className="w-full max-w-sm"
              variants={appearBottom3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="group relative max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-lg">
                <div className="relative h-[40rem]">
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

          <div className="flex flex-col items-center justify-center mt-[10rem]">
            <div className="w-15 h-15 bg-amber-50 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="/home/paper-plane.png"
                alt="paper-plane"
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-[3rem] font-semibold mt-[5rem] text-center">
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
                bg-transparent
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
      <section className="h-screen w-full">
        <video
          className="w-full h-full object-cover"
          controls
          preload="none"
          poster="/home/video/poster.jpg"
        >
          <source src="/home/video/tennis-play.mp4" type="video/mp4" />
        </video>
      </section>
      {/* vdo section end */}
    </>
  );
}
