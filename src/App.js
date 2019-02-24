import React, { Component } from 'react';
import './App.css';
import MyName from './MyName';
import Counter from './Counter';

class App extends Component {
  render() {
    const name = 'react';
    const value = 1;
    const style = {
      backgroundColor: 'pink',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
    // 하이!!
    return (
      <div>
        <h1>안녕하세요 {name}</h1>
        <h2>{name}를 배워요</h2>
        {1 + 1 == 2 ? '맞다!' : '틀리다!'}
        {name == 'react' && <div>react 다!</div>}
        {(function() {
          if (value == 1) return <div style={style}>1이다!</div>;
          return <div>없다</div>;
        })()}
        {(() => {
          if (value == 2) return <div>2이다!</div>;
          return <div className="App">없다!</div>;
        })()}
        //하이!! 주석입니까? /*멀티라인도 예외가 아니다*/
        {/* 이게 주석이다. */}
        <h1
          something="blahblah" //내가 여기에 주석을 쓸꺼야!
        >
          리액트
        </h1>
        <MyName name="리액트" />
        <MyName />
        <Counter />
      </div>
    );
  }
}

export default App;
