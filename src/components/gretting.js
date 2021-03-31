// PropTypesをインポート
import  React, { PropTypes } from 'react';

  // 関数component
 function Greeting(props){
   return (
    <div>{props.name}</div>
   );
 }
// typeの指定が必要か？
export default Greeting;
