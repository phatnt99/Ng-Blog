import Home from "../../containers/Home";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import MetaHead from "../../components/MetaHead";
import PostContent from "../../components/PostContent";
import PostTitle from "../../components/PostTitle";
import PostDetails from "../../components/PostDetails";
import PostCoverImage from "../../components/PostCoverImage";
import metaData from "../../lib/data";
import { ThemeContext } from "../../lib/context";
import { useEffect, useContext } from "react";

export default function Post({ post }) {
    const { theme, setTheme } = useContext(ThemeContext);
    let articleClassName = theme === "dark" ? "flex flex-col max-w-5xl px-2 mx-auto space-y-4 bg-black px-12 rounded" :
        "flex flex-col max-w-5xl px-2 mx-auto space-y-4 bg-white px-12 rounded";

    useEffect(() => {
        articleClassName = theme === "dark" ? "flex flex-col max-w-5xl px-2 mx-auto space-y-4 bg-black px-12 rounded" :
        "flex flex-col max-w-5xl px-2 mx-auto space-y-4 bg-white px-12 rounded";
    }, [theme]);

    return (
        <Home>
            <MetaHead
                title={post.title + " | " + metaData.alter.title}
                description={post.excerpt}
                url={metaData.url}
                image={metaData.image}
            />
            <article className={articleClassName}>
                <div className="flex flex-col my-6 space-y-3">
                    <PostTitle title={post.title} />
                    <PostDetails author={post.author} date={post.date} />
                    <PostCoverImage image={post.coverImage} />
                    <PostContent content={post.content} />
                </div>
            </article>
        </Home>
    );
}

export async function getStaticProps({ params }) {
    const post = getPostBySlug(params.slug, [
        "tag",
        "title",
        "date",
        "slug",
        "author",
        "content",
        "ogImage",
        "coverImage",
        "excerpt"
    ]);
    const content = post.content || "";

    return {
        props: {
            post: {
                ...post,
                content,
            },
        },
    };
}

export async function getStaticPaths() {
    const posts = getAllPosts(["slug"]);

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}
