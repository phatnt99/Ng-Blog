import Link from "next/link";
import { useContext } from "react";

export default function PostPreviewTitle({ slug, title }) {
    const { theme, setTheme } = useContext(ThemeContext);
    let titleStyle = theme == "dark" ? "text-black text-2xl font-bold no-underline sm:text-3xl hover:underline" :"text-2xl font-bold no-underline sm:text-3xl hover:underline";
    return (
        <Link as={`/posts/${slug}`} href={`/posts/${slug}`}>
            <a className={titleStyle}>
                {title}
            </a>
        </Link>
    );
}
