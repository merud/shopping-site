import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  class ShoppingSite extends React.Component {
    render() {
      return (
        <div>Hello and Welcome to this shopping website</div>
      );
    }
  }
  
  ReactDOM.render(
    <ShoppingSite />,
    document.getElementById('root')
  );
  