import ReactMarkdown from "react-markdown";

export default function PostContent({ content }) {
    return (
        <ReactMarkdown
            className="text-lg markdown"
            source={content}
            escapeHtml={true}
        />
    );
}
