import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import styles from './App.module.css';

function App() {
  // TODO: App이 mount된 다음 useEffect안에서 localStorage에 배열 값을 저장한다.
  // Storage.setItem(): 키가 저장소에 존재하는 경우 값을 재 설정 -> update / 키가 저장소에 존재하지 않으면 키와 값을 저장소에 추가 -> add
  // Storage.getItem(): 주어진 키에 연결된 값을 반환한다. -> read
  // Storage.removeItem(): 주어킨 키를 저장소에서 제거 -> delete

  // local storage에는 값이 객체로만 넣을 수 있음({ key: value }). 배열을 순회하면서 객체들을 local storage에 추가하기
  // useEffect(() => {
  // todoData 자체를 문자열로 만들어서 로컬 스토리지에 저장하기
  // localStorage.setItem('todos', JSON.stringify(todoData));
  // }, []);

  return (
    <div className={styles.app}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

// initialData = [1, 2, 3];
// localstorage = {todos: [1, 2, 3]}
// [1, 2, 3]
