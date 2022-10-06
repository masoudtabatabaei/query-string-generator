import { useEffect, useReducer } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Pagination } from './components/Pagination';
import { useQueryGenerator } from './hooks/useQueryGenerator';
import { InitialState, reducer } from './urlGenerator';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer,InitialState);
  
  useEffect(() => {
    console.log("Run again...");
  },[state.page]);

  const handlePaginate = () => {
    return (pageNo) => {
      dispatch({type: "UPDATE_PAGE" , data:{pageNo}})
    }
  }

  const handleGetValue = (query) => {
    console.log("Handle Get Value" , query);
    // return () => {
      dispatch({type: "UPDATE_QUERY", data: {query}});
    // }
  }

  const handleSubmit = () => {
    console.log("Submited: ");
    return () => {
      dispatch({type: "PASS_QUERY", data: {passQuery: true}});
    }
  }

  return (
      <div className='app'>
        <div>?query={state.query}&page={state.page}&size={state.size}</div>

        <Input searched={state.query} passValue={state.passQuery} getValue={(value) => handleGetValue(value)}/>
        <Pagination handleClick = {handlePaginate()}/>
        <Button handleClick= {handleSubmit()}/>
      </div>
  );
}

export default App;
