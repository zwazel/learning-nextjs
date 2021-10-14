import Layout, {siteTitle} from '../../components/layout'
import Head from "next/head";
import {getImages} from "../../lib/imageGalleryUtil";
import utilStyles from "../../styles/utils.module.css";
import galleryStyle from "../../styles/gallery.module.css";
import Image from 'next/image'

export async function getStaticProps() {
    const allImagesData = getImages()
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
                {allImagesData.map(({id, fileName}) => (
                    <Image src={'/gallery/' + fileName} key={id} alt={id} width={600} height={400}/>
                ))}
            </section>
        </Layout>
    )
}