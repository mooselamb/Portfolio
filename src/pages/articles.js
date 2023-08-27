import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'

const FeaturedArticle = ({title, img, summary, link}) => {

    return (
        <li>
            <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <Link href={link} target="_blank">
        <h2 className='capitalize text-2xl font-bold my-2'>{title}</h2>
      </Link>
      <p className='text-sm mb-2'>{summary}</p>
        </li>
    )

}

const articles = () => {
  return (
    <>
    <Head>
        <title>Umair Shafiq | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text='"Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke' className='mb-16' />
            <ul className='grid grid-col-2 gap-16'>
                <FeaturedArticle 
                title='Frontend Technologies and Svelte'
                summary='A talk to a class of aspiring software engineers about the important topic of frontend frameworks highlighting the increasingly popular Svelte.'
                link='https://www.linkedin.com/posts/umair-w-shafiq_a-talk-to-a-class-of-aspiring-software-engineers-activity-7047272599692726272-e7Gy?utm_source=share&utm_medium=member_desktop'
                
                />
            </ul>
        </Layout>
      </main>
    </>
    )
}

export default articles