import { useEffect, useState } from "react";
import "./styles.css";

export const Input = ({searched, getValue}) => {
    const [keyword, setKeyword] = useState(searched);

    const handleChange = (e) => {
        setKeyword(e.target.value);
        getValue(e.target.value);
    }

    return <>
        <input type="text" placeholder="Enter a name" value={keyword} onChange={handleChange}/>
    </>
}