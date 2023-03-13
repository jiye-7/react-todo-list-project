import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.module.css';

function App() {
  const [filterValue, setFilterValue] = useState('All');

  const handleChangeFilterValue = (filterValue) => {
    setFilterValue(filterValue);
  };

  return (
    <div className={styles.app}>
      <Header onChangeFilterValue={handleChangeFilterValue} />
      <Main filterValue={filterValue} />
    </div>
  );
}

export default App;
