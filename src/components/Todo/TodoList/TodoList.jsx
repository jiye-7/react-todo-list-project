import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

// localStorage의 length 읽기 속성을 사용하면, Storage 객체에 저장된 데이터 항목의 수를 반환한다.
// 데이터 항목 개수를 구한 다음 1부터 해당 개수만큼 반복문을 돌면서 새로운 배열 변수에 할당하기

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localStorageData = [];

    // localStorage.key(index) index: 반환받으려하는 key의 번호를 나타내는 정수. 이 정수는 0부터 시작하는 인덱스
    for (let i = 0; i < localStorage.length; i++) {
      localStorageData.push(
        JSON.parse(localStorage.getItem(localStorage.key(i)))
      );
    }
    setTodos([...localStorageData]);
  }, []);

  return (
    <section className={styles.container}>
      <ul className={styles.todos}>
        {todos?.map((todo) => (
          <TodoItem key={todo?.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
