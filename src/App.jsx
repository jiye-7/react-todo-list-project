import React, { useState } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.module.css';

const filters = ['all', 'active', 'completed'];

function App() {
  const [filter, setFilterValue] = useState(filters[0]);

  const handleChangeFilterValue = (filterValue) => {
    setFilterValue(filterValue);
  };

  return (
    <div className={styles.app}>
      <Header
        filters={filters}
        filter={filter}
        onChangeFilterValue={handleChangeFilterValue}
      />
      <Main filter={filter} />
    </div>
  );
}

export default App;
