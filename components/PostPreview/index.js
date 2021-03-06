import PostDetails from "../PostDetails";
import PostExcerpt from "../PostExcerpt";
import PostPreviewTitle from "../PostPreviewTitle";

export default function PostPreview({ post }) {
    return (
        <div className="flex flex-col my-4 space-y-3 bg-white p-5 border-2 rounded-lg">
            <PostPreviewTitle slug={post.slug} title={post.title} />
            <PostDetails author={post.author} date={post.date} />
            <PostExcerpt excerpt={post.excerpt} />
        </div>
    );
}
