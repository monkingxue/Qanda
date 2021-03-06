import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import MarjorList from './majorList/index';
import RaiseQuestion from '../../../component/raiseQuestion';

class Category extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={style.categoryBgStyle} className="flex-col">
        <div style={style.wrapContent} className="flex-col">
          <div className="flex-grow-one">
            <div style={style.logoBgStyle}></div>
            <MarjorList/>
          </div>
          <div className="flex-col align-center"
               style={style.desFontStyle}>
            <RaiseQuestion/>
          </div>
        </div>
      </div>
    );
  }
}

const style = {
  categoryBgStyle: {
    background: "url('dist/assets/images/background.jpg')",
    backgroundRepeat: 'noRepeat',
    backgroundSize: '266px 100vh',
    width: '266px',
    height: '100vh',
    position: 'fixed',
    zIndex: '0'
  },
  wrapContent: {
    marginLeft: '66px',
    height: '100%'
  },
  logoBgStyle: {
    background: "url('dist/assets/images/whitelogo.png')",
    width: '200px',
    height: '80px',
  },
  desFontStyle: {
    marginBottom: '80px'
  },
  questionBtnStyle: {
    width: '150px',
    height: '40px',
    marginBottom: '50px'
  },
  questionBtnLabelStyle: {
    color: '#fff',
    fontSize: '15px',
    fontWeight: 100,
    lineHeight: '40px'
  }
};

export default Category;
