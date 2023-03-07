import React, { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const list = [
  {
    id: 1,
    content: '공부하기',
    status: 'active',
  },
  {
    id: 2,
    content: '책 읽기',
    status: 'active',
  },
  {
    id: 3,
    content: '강의 보기',
    status: 'completed',
  },
  {
    id: 4,
    content: '운동 하기',
    status: 'active',
  },
  {
    id: 5,
    content: '커피 마시기',
    status: 'active',
  },
  {
    id: 6,
    content: '병원 가기',
    status: 'active',
  },
  {
    id: 7,
    content: '통화 하기',
    status: 'completed',
  },
  {
    id: 8,
    content: '알고리즘 공부하기',
    status: 'active',
  },
  {
    id: 9,
    content: '프로젝트 만들기',
    status: 'active',
  },
  {
    id: 10,
    content: '포트폴리오 만들기',
    status: 'completed',
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos([...list]);
  }, []);

  return (
    <section className={styles.container}>
      <ul className={styles.todos}>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
