import { useEffect, useState } from "react";
import "./styles.css";

export const Input = ({searched, passValue, getValue}) => {
    const [keyword, setKeyword] = useState(searched);

    const handleChange = (e) => {
        console.log("Passed:",passValue);
        setKeyword(e.target.value);
    }

    useEffect(() => {
        if(passValue) {
            getValue(keyword);
        }
    },[passValue]);

    return <>
        <input type="text" placeholder="Enter a name" value={keyword} onChange={handleChange}/>
    </>
}