import { useEffect, useReducer, useRef } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Pagination } from './components/Pagination';
import { useQueryGenerator } from './hooks/useQueryGenerator';
import { InitialState, reducer } from './urlGenerator';
import './App.css';
import { Navigate, useNavigate } from 'react-router-dom';

const App = () => {
  const [state, dispatch] = useReducer(reducer,InitialState);
  const inputRef = useRef("");
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("Run again...");
  },[state.page]);

  const handlePaginate = (pageNo) => {
    dispatch({type: "UPDATE_PAGE" , data:{pageNo}});
  }

  const handleGetValue = (query) => {
    // console.log("Handle Get Value" , query);
    inputRef.current = query;
  }
  
  const handleSubmit = () => {
    // console.log("Submited: ");
    dispatch({type: "UPDATE_QUERY", data: {query: inputRef.current}});
    // dispatch({type:"PASS_QUERY", data: {passQuery: new Date().getTime()}});
    navigate({
      pathname: "/",
      search: `?query=${inputRef.current}&page=${state.page}&size=${state.size}`
    });
  }

  const handleToggleSize = (pageSize) => {
    // console.log("page-size: ", pageSize);
    dispatch({type: "UPDATE_PAGE_SIZE", data: {pageSize}});
  }

  return (
      <div className='app'>
        <div>?query={state.query}&page={state.page}&size={state.size}</div>

        <Input searched={state.query} passValue={state.passQuery} getValue={(value) => handleGetValue(value)}/>
        <Pagination handleClick = {(pageNo) => handlePaginate(pageNo)} handleToggleSize={(size) => handleToggleSize(size)}/>
        <Button handleClick= {handleSubmit}/>
      </div>
  );
}

export default App;
