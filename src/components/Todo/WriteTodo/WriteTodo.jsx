import React, { useState } from 'react';
import styles from './WriteTodo.module.css';

export default function WriteTodo() {
  const lastItemKeyPlus1 = localStorage.length + 1;
  const [inputValue, setInputValue] = useState('');
  // 새로운 todo를 만듦
  // input값에 공백이 있을 경우 공백 제거하여 등록
  // 빈 문자열일 때는 등록 안되도록 처리
  // Add 버튼 클릭 시 유효성 검증 후 통과했을 때 localStorage에 추가
  const handleInputUpdate = (value) => {
    setInputValue(value);
  };

  const valueExist = () => {
    if (inputValue.length) {
      createTodo(inputValue);
    }
  };

  const createTodo = (inputValue) => {
    localStorage.setItem(
      lastItemKeyPlus1,
      JSON.stringify({
        id: lastItemKeyPlus1,
        content: inputValue.trim(),
        status: 'active',
      })
    );
    setInputValue('');
  };

  // 추가할 때 id값은 마지막 객체의 id 값보다 1씩 크게 넣어줘야 한다.
  // 마지막 id의 값을 저장하는 변수가 필요, 그 변수를 가져와서 1을 더한 값을 id로 넣어준다. -> localStorage.length - 1한 값이 바로 마지막 key의 숫자
  // key: value localStorage에 추가하기

  return (
    <section className={styles.container}>
      <input
        type='text'
        placeholder='Add Todo'
        value={inputValue}
        onChange={(e) => handleInputUpdate(e.target.value)}
      />
      <button onClick={valueExist}>Add</button>
    </section>
  );
}
