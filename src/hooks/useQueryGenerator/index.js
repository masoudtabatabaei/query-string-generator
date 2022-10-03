import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const useQueryGenerator = (key,value) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let updatedSearchParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        console.log("search: ", searchParams.toString());
        // let obj = {};
        // obj[key] = value;
        // searchParams.set(key,value);
        // setSearchParams([...searchParams.entries(), [key, value]]);
        if(!updatedSearchParams.get(key)) {
            console.log(`key: ${key}, value: ${value}`);
            searchParams.set(key,value);
            setSearchParams(searchParams);
        } else {
            updatedSearchParams.append(key,value);
            setSearchParams(updatedSearchParams);
        }
    },[key]);
    
    return searchParams;
}

