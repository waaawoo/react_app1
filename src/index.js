// パッケージをインポート
// アプリ開発、ブラウザ用の記述を記載できる
import React from 'react';
// ブラウザ開発に特化したもの
import ReactDOM from 'react-dom';
// スタイルシート読み込み
import './css/index.scss';

// componentsフォルダで作成したファイルを呼び出す
import App_class from './components/app';

// jsx構文        Appを読み込んでいる
ReactDOM.render(<App_class />, document.querySelector('.container'));
