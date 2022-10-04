import { useEffect, useReducer } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Pagination } from './components/Pagination';
import { useQueryGenerator } from './hooks/useQueryGenerator';
import { InitialState, reducer } from './components/urlGenerator';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer,InitialState);
  
  useEffect(() => {
    console.log("Run again...");
  },[state.page]);

  return (
      <div className='app'>
        <div>{state.page}</div>
        <Input/>
        <Pagination handleClick = {(pageNo) => {
          dispatch({type: "UPDATE_PAGE" , data:{pageNo}})
        }}/>
        <Button />
      </div>
  );
}

export default App;
