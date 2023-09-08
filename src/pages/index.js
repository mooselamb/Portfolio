import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from "../../public/images/profile/digibrain.png";
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/lightBulb-transformed.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Umair Shafiq</title>
        <meta name="description" content="Generated by create next app" />
        
        
      </Head>
      <main className='relative flex items-center text-dark w-full min-h-screenn'>
        <Layout className='pt-0'>

          <div className="flex items-center justify-between w-full">
            <div className='w-1/2'>
              <Image src={profilePic} alt="Umair Shafiq" className='w-full h-auto rounded-full' />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Hi! I'm Umair Shafiq!" className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
              A Frontend focused Fullstack Web Developer who believes in championing cutting-edge web development and driving innovation in exceptional user experiences.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/Umair Resume.docx" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-xl text-lg font-semibold hover:bg-light hover:text-dark transition duration-300 ease-in-out
                border-2 border-dark'
                download={true}
                >Resume <LinkArrow className={"w-6 ml-1"} />
                
                </Link>
                <Link href="mailto:umairshafiqprof@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-blue-400 underline'
                >Contact</Link>

              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 -bottom-1 inline-block w-auto'>
          <Image src={lightBulb} alt="Lightbulb" className='max-w-sm h-auto' />
        </div>
      </main>
    </>
  )
}
