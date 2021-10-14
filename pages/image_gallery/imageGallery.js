import Layout, {siteTitle} from '../../components/layout'
import Head from "next/head";
import {getImages} from "../../lib/imageGalleryUtil";
import utilStyles from "../../styles/utils.module.css";
import galleryStyle from "../../styles/gallery.module.css";
import {Box, Container, Text, Wrap, WrapItem} from "@chakra-ui/react";
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
        <Box overflow="hidden" bg="purple.100" minH="100vh">
            <Container>
                <Text
                    color="pink.800"
                    fontWeight="semibold"
                    mb="1rem"
                    textAlign="center"
                    textDecoration="underline"
                    fontSize={["4xl", "4xl", "5xl", "5xl"]}
                >
                    NextJS Image Gallery
                </Text>
            </Container>

            <Wrap px="1rem" spacing={4} justify="center">
                {allImagesData.map(({id, fileName}) => (
                    <WrapItem
                        key={id}
                        boxShadow="base"
                        rounded="20px"
                        overflow="hidden"
                        bg="white"
                        lineHeight="0"
                        _hover={{boxShadow: "dark-lg"}}
                    >
                        <Image src={'/gallery/' + fileName} key={id} alt={id} width={600} height={400}/>
                    </WrapItem>
                ))}
            </Wrap>
        </Box>
    )
}