import { useEffect } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Pagination } from './components/Pagination';
import { useQueryGenerator } from './hooks/useQueryGenerator';

function App() {
  const page = useQueryGenerator("page","2");
  // const query = useQueryGenerator("query","masoud");
  
  useEffect(() => {
    // console.log("Query: ", query.get("query"));
    // console.log("Page: ", page.get("page"));
  },[]);

  return (
      <div className='app'>
        <Input />
        <Pagination />
        <Button />
      </div>
  );
}

export default App;
