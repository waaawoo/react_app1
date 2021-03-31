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
// class App_class extends Component{
//   render(){
//     return (
//       // reactは一番上の要素は一つでないといけない
//       <div>
//         {/* 中の要素は複数あっても良い */}
//         <Greeting name = "親の名前を呼び出し1"/>
//       </div>

//     );
//   }
// }

// stateでステータスを持たせる記述
class App_class extends Component{
  // コンストラクタで初期値を設定する
  constructor(props){
    // 親のpropsも読んでおく
    super(props);
    // ステートの初期値を設定
    this.state = {
      name: 'タル王',
    };
  }

  // --------- 使用する関数を作成する -----------

  // handleMouseOver(){
  //   this.setState({ name: 'Bob' });
  // }

  // handleMouseOut(){
  //   this.setState({ name: 'Mike' });
  // }

  // 引数にe.taget.valueが入ってくる
  handleNameChange(name){
    // onNameChangeイベントのvalueを取得する
    // this.setState({ name: name})// ショートハンド⬇︎
    this.setState({ name })
  }
//  ------------------------------------------

  // 情報を渡す
  render(){
    return(
      <div
        // mouseoverはjsの関数、そこに無名関数を渡す
        // onMouseOver={() => this.handleMouseOver()}
        // onMouseOut={() => this.handleMouseOut()}
      >
        {/* 入力値のvalueをthis.state.nameで変数へいれると固定される */}
        <input
          type="text"
          value={this.state.name}
          // イベント設置 ブラウザでonchangeされる時、イベントが渡される(e.taget.value)を引数に入れる
          onChange={(e) =>  this.handleNameChange(e.target.value)}
        />

        {/*
          関数の再利用例
          ボタンを押すとOnclickイベントが発火し、関数を実行、引数にbobが入っているのでBobが渡される
        */}
        <button
          onClick={() => this.handleNameChange("Bob")}
        >Bob</button>

        {/* this.stateで設定したnameを渡す */}
        <Greeting name={this.state.name} />
      </div>
    )
  }
}


// 外からインポートできるように記載
// export default App;
export default App_class;
