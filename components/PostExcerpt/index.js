import { ThemeContext } from "../../lib/context";
import { useContext } from "react";

export default function PostExcerpt({ excerpt }) {
    const { theme, setTheme } = useContext(ThemeContext);
    let excerptStyle = theme == "dark" ? "w-full leading-normal text-black" : "w-full leading-normal";
    return (
        <div className={excerptStyle}>
            {excerpt}
        </div>
    );
}
