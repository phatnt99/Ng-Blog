import Home from "../containers/Home";
import { getPageBySlug } from "../lib/api";
import MetaHead from "../components/MetaHead";
import PostContent from "../components/PostContent";
import PostTitle from "../components/PostTitle";
import metaData from "../lib/data";

export default function About({ page }) {
    return (
        <Home>
            <MetaHead
                title={page.title}
                description={page.excerpt}
                url={metaData.url}
                image={metaData.image}
            />
            <article className="flex flex-col max-w-5xl px-2 mx-auto space-y-4">
                <div className="flex flex-col my-6 space-y-3">
                    <PostTitle title={page.title} />
                    <PostContent content={page.content} />
                </div>
            </article>
        </Home>
    );
}

export async function getStaticProps() {
    const page = getPageBySlug("about", ["title", "slug", "content"]);
    const content = page.content || "";

    return {
        props: {
            page: {
                ...page,
                content,
            },
        },
    };
}
