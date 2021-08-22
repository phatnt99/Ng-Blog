import PostBy from "../PostBy";
import PostOn from "../PostOn";
import { useContext } from "react";

export default function PostDetails({ author, date }) {
    const { theme, setTheme } = useContext(ThemeContext);
    let detailStyle = theme == "dark" ? "text-black flex flex-col space-x-0 space-y-2 text-base font-normal sm:space-x-2 sm:space-y-0 sm:flex-row" : "flex flex-col space-x-0 space-y-2 text-base font-normal sm:space-x-2 sm:space-y-0 sm:flex-row";
    return (
        <div className={detailStyle}>
            <PostBy author={author} />
            <PostOn date={date} />
        </div>
    );
}
