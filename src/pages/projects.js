import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import Gesvelte from "../../public/images/projects/Gesvelte.png";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[100.50%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} className="w-10" target="_blank">
            {" "}
            <GithubIcon />{" "}
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            target="_blank"
          >
            {" "}
            Visit Project{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[100.50%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            className="text-lg font-semibold underline"
            target="_blank"
          >
            {" "}
            Visit{" "}
          </Link>
          <Link href={github} className="w-8" target="_blank">
            {" "}
            <GithubIcon />{" "}
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Umair Shafiq | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text='"The future belongs to those who see possibilities before they become obvious." - John Sculley'
            className="mb-16"
          />

          <div className="grid grid-col-12 gap-24 gap-y-32">
            <div className="col-span-12">
              {" "}
              <FeaturedProject
                title="GeSvelte"
                summary="GeSvelte is a custom Svelte form builder that revolutionizes form creation by integrating TypeScript, SCSS, and atomic CSS to offer pre-composed, highly styled components that adhere to W3C A11Y standards. Utilizing SvelteKit's layout API and Vite, it ensures a cohesive interface with modular design, responsive code templating, and optimized load times. The system's server-side rendering enables quick generation of responsive forms, while its tailored Svelte store and strategic project management practices contribute to a robust and efficient development environment."
                link="https://www.gesvelte.io/"
                type="Featured Project"
                github="https://github.com/mooselamb/geSvelte"
                img={Gesvelte}
              />{" "}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
