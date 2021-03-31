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

  handleMouseOver(){
    this.setState({ name: 'Bob' });
  }

  handleMouseOut(){
    this.setState({ name: 'Mike' });
  }
//  ------------------------------------------

  // 情報を渡す
  render(){
    return(
      <div
        // mouseoverはjsの関数、そこに無名関数を渡す
        onMouseOver={() => this.handleMouseOver()}
        onMouseOut={() => this.handleMouseOut()}

      >
        {/* this.stateで設定したnameを渡す */}
        <Greeting name={this.state.name} />
      </div>
    )
  }
}


// 外からインポートできるように記載
// export default App;
export default App_class;
