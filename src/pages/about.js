import React, { useRef, useEffect } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profilePic.png";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, {once: true});

  useEffect(() => {
    if(isInView){
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if(ref.current && latest.toFixed(0) <= value){
        ref.current.textContent = latest.toFixed(0);
      }
    }, [springValue, value])
  })

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Umair Shafiq | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Code Fuels Creativity: Where Innovation Meets Imagination!"
            className="mb-16"
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About Me
              </h2>
              <p className="font-medium">
                Hey there! I'm Umair Shafiq, your friendly neighborhood
                Fullstack Software Engineer with a particular passion for all
                things Frontend. Whether it's crafting pixel-perfect UI or
                geeking out over the latest in Video and Boardgames, tech runs
                through my veins. Currently, I'm obsessed with Ai and diving
                deep into its integration in code.
              </p>

              <p className="font-medium my-4">
                My most recent adventure took me to the exciting world of
                Agri-tech, where I was fortunate to work with Noria Water
                Technologies where I played a part in revamping UX-UI design and
                ushering in a sleek serverless architecture. Nowadays, you'll
                find me tinkering with AI-enhanced projects, sharpening my web
                development skills, and keeping up with the ever-evolving tech
                trends.
              </p>

              <p className="font-medium">
                My journey to my true calling wasn’t a straight line, however.
                Five years ago, I was a medical school grad. But the siren song
                of code lured me away to my true love: computer science. I
                embraced the world of teaching and leveled up at the advanced
                computer science residency at Codesmith. The Frontend stole my
                heart with React, Redux, Next.js, Typescript, and Tailwind CSS,
                while the Backend world drew me in with JavaScript, Python,
                Node.js, and of course SQL and NoSQL databases.
              </p>

              <p className="font-medium mt-4">
                So, if you're in the market for a tech-loving, design-crafting,
                web-developing wizard with a dash of informality and a whole lot
                of drive, don't hesitate to reach out. Let's build something
                amazing together!
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Umair Shafiq"
                className="w-full h-auto rounded-2xl "
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={50} />
                  </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  satisfied clients
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={40} />
                  </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />
                  </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
