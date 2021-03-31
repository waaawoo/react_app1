// classcomponentを使用する場合はComponetを継承するため、{ Component }が必要
import React, { Component } from 'react'
// Props関数を呼び出し
import Greeting from './gretting';
// propsを受け取ってJsを返す関数
// function App(props){
//   return (<div>Hello from functon App</div>);
// }

// Classでの作成
// class App_class extends Component{
//   render(){
//     return (<div>Hello from class App</div>);
//   }
// }

// props関数呼び出しで使用
class App_class extends Component{
  render(){
    return (
      // reactは一番上の要素は一つでないといけない
      <div>
        {/* 中の要素は複数あっても良い */}
        <Greeting name = "親の名前を呼び出し1"/>
        <Greeting name = "親の名前を呼び出し2"/>
      </div>

    );
  }
}
// 外からインポートできるように記載
// export default App;
export default App_class;
