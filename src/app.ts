// import { Component, PropsWithChildren } from "react";
// import { AtButton } from "taro-ui";
// import 'taro-ui/dist/style/index.scss'
// import "./app.scss";
//
// class App extends Component<PropsWithChildren> {
//   componentDidMount() {}
//
//   componentDidShow() {}
//
//   componentDidHide() {}
//
//   // this.props.children 是将要会渲染的页面
//   render() {
//     return this.props.children;
//   }
// }
//
// export default App;
import React from 'react';
import { AtButton } from 'taro-ui';
import 'taro-ui/dist/style/index.scss';
import './app.scss';

const App = (props) => {
  return props.children;
};

export default App;
