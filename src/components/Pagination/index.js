import { SelectPageSize } from "./components/SelectPageSize";
import "./styles.css";

export const Pagination = ({handleClick}) => {
    // const handleChangePage = (pageNo) => {
    //     console.log("page is: ", pageNo);
    // }

    const renderBtns = () => {
        let btns = [];
        for(let i=1; i<=4; i++){
            btns.push(<button key={i} onClick={() => handleClick(i)}>{i}</button>);
        }

        return btns;
    }
    
    return <>
        <div className="pagination_container">
            <SelectPageSize/>
            {renderBtns()}
        </div>
    </>
}