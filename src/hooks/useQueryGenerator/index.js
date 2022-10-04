import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export const useQueryGenerator = (key,value) => {
    const [searchParams, setSearchParams] = useSearchParams(window.location.search);
    const urlParams = new URLSearchParams(window.location.search);
    
    useEffect(() => {
        searchParams.set(key, value);

        setSearchParams(searchParams);
        console.log("query: ", searchParams.toString());
    },[searchParams]);

    const qs = useMemo(() => {

    });
    
    // useEffect(() => {
    //     setTimeout(()=>{
    //         searchParams.set('name', 'mahya');
    //         setSearchParams(searchParams);
    //     },3000);
    // },[]);
    
    return searchParams;
}

