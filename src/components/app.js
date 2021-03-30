// classcomponentを使用する場合はComponetを継承するため、{ Component }が必要
import React, { Component } from 'react'

// propsを受け取ってJsを返す関数
function App(props){
  return (<div>Hello from functon App</div>);
}

// Classでの作成
class App_class extends Component{
  render(){
    return (<div>Hello from class App</div>);
  }
}
// 外からインポートできるように記載
// export default App;
export default App_class;
