import "./styles.css";

export const SelectPageSize = ({handleToggleSize}) => {
    return <select className="page_size" onChange={(e) => handleToggleSize(e.target.value)}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
    </select>;
}