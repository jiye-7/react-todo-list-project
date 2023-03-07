import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

const todoList = [
  {
    id: 1,
    title: '공부하기',
    completed: false,
  },
  {
    id: 2,
    title: '책 읽기',
    completed: false,
  },
  {
    id: 3,
    title:
      '강의 보기 강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기강의 보기',
    completed: true,
  },
  {
    id: 4,
    title: '운동 하기',
    completed: false,
  },
  {
    id: 5,
    title: '커피 마시기',
    completed: false,
  },
  {
    id: 6,
    title: '병원 가기',
    completed: false,
  },
  {
    id: 7,
    title: '통화 하기',
    completed: true,
  },
];

export default function TodoList() {
  return (
    <div className={styles.list}>
      {todoList?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
