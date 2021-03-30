// パッケージをインポート
// アプリ開発、ブラウザ用の記述を記載できる
import React from 'react';
// ブラウザ開発に特化したもの
import ReactDOM from 'react-dom';
// スタイルシート読み込み
import './css/index.scss';

// jsx構文
ReactDOM.render(<div>Hello React</div>, document.querySelector('.container'));
