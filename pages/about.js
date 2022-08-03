import Contact from "components/contact";
import Container from "components/container";
import Hero from "components/hero";
import PostBody from "components/post-body";
import { TwoColumn, TwoColumnMain, TwoColumnSidebar } from "components/two-column";
import Image from "next/image";
import eyecatch from 'images/about.jpg'
import Head from "next/head";
import Meta from "components/meta";

export default function About() {
    return (
        <Container>
            <Meta
                pageTitle="アバウト"
                pageDesc="About Development activities"
                pageImg={eyecatch.src}
                pageImgW={eyecatch.width}
                pageImgH={eyecatch.height}
            />
            <Hero title="About" subtitle="About development activities" />
            <figure>
                <Image
                    src={eyecatch}
                    alt=""
                    layout="responsive"
                    sizes="50vw"
                    priority
                    placeholder="blur"
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            Cubeが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、様々な技術を組み合わせることによって社会や
                            環境と結びつけるクリエイティブを提案し続けています。
                        </p>
                        <h2>モノづくりで目指していること</h2>
                        <p>
                            モノづくりではデータの解析からクリエイティブまで幅広いことを担当します。新しいことを取り入れながら、ユーザーにマッチした提案を実現するのが
                            目標です。たくさんの開発・提供が数多くありますが、特にそこを磨く作業に力を入れています。
                        </p>
                        <p>
                            単純に形にするだけでなく、造る過程やなぜそのようにしたのかを大切にしながらモノづくりをしています。
                            毎回課題解決やテーマをもって「モノ」と向き合い制作をし、フィードバックしてもらうことで自分の中にあるもやもやを言葉にして「問い」への答えを
                            出しています。
                        </p>
                        <p>
                            今までと違うモノを作ることで愛着がわいてきます。そこで興味を持ったことは小さなことでもいいから取り入れて、良いモノを作れるようにしています。
                            小さなヒントから新しいモノを生み出すようなモノづくりは、これからも続けていきたいです。
                        </p>
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container >
    )
}