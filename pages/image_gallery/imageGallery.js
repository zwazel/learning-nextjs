import Layout, {siteTitle} from '../../components/layout'
import Head from "next/head";
import {getImages} from "../../lib/imageGalleryUtil";
import utilStyles from "../../styles/utils.module.css";
import Image from 'next/image'

export async function getStaticProps() {
    const allImagesData = getImages()
    console.log(allImagesData)
    return {
        props: {
            allImagesData
        }
    }
}

export default function ImageGallery({allImagesData}) {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <div>
                    {allImagesData.map(({id, fileName}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Image src={'/gallery/'+fileName} alt={id} layout={"fill"}/>
                        </li>
                    ))}
                </div>
            </section>
        </Layout>
    )
}