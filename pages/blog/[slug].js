import Container from "components/container"
import ConvertBody from "components/convert-body"
import PostBody from "components/post-body"
import PostHeader from "components/post-header"
import PostCategories from "components/post-categories"
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column"
import { getPostBySlug, getAllSlugs } from "lib/api"
import Image from "next/image"
import { extractText } from "lib/extract-text"
import Meta from "components/meta"
import { getPlaiceholder } from "plaiceholder"
//ローカルのアイキャッチ画像
import { eyecatchLocal } from "lib/constants"

export default function Post({
    title,
    publish,
    content,
    eyecatch,
    categories,
    description,
}) {
    return (
        <Container>
            <Meta
                pageTitle={title}
                pageDesc={description}
                pageImg={eyecatch.url}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <PostHeader title={title} subtitle="Blog Article" publish={publish} />
            <figure>
                <Image
                    src={eyecatch.url}
                    alt=""
                    layout="responsive"
                    width={eyecatch.width}
                    height={eyecatch.height}
                    sizes="(min-width:1152px) 1152px, 100vw"
                    priority
                    placeholder="blur"
                    blurDataURL={eyecatch.blurDataURL}
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <ConvertBody contentHTML={content} />
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <PostCategories categories={categories} />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}

export async function getStaticPaths() {
    const allSlugs = await getAllSlugs()
    return {
        paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    const slug = context.params.slug

    const post = await getPostBySlug(slug)

    const description = extractText(post.content)

    const eyecatch = post.eyecatch ?? eyecatchLocal

    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    return {
        props: {
            title: post.title,
            publish: post.publishDate,
            content: post.content,
            eyecatch: eyecatch,
            categories: post.categories,
            description: description,
        },
    }
}