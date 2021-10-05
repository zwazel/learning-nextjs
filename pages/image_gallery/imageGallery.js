import Layout, {siteTitle} from '../../components/layout'
import Head from "next/head";

export default function ImageGallery() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>

            <section>
                <p>HIER KOMMEN BILDER</p>
            </section>
        </Layout>
    )
}