/* props available:

theme = red|yellow|blue|green|orange|purple|dark|light
openerPlacement = top|top-right|right|bottom-right|bottom|bottom-left|left|top-left
openerSize = small|medium|large
showOpener = true|false

openerSetForm method
toggleShowOpener method
closerClicked method

local states:
divSize
divPlacement
closerPlacement
openerStyles
animation
openerDivStyles
*/

import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackBasic.css';

export default class FeedbackBasic extends React.Component {
  constructor(props) {
    super(props);
    const { theme, openerSize, openerPlacement } = this.props;
    this.state = {
      theme: FeedbackBasic.setTheme(theme),
      openerSize: FeedbackBasic.setOpenerSize(openerSize),
      divSize: FeedbackBasic.setDivSize(openerSize),
      divPlacement: FeedbackBasic.setDivPlacement(openerPlacement),
      closerPlacement: FeedbackBasic.setCloserPlacement(
        openerPlacement,
      ),
      openerStyles: {},
      openerDivStyles: {},
      animation: FeedbackBasic.setAnimation(openerPlacement),
    };
    this.openerClicked = this.openerClicked.bind(this);
    this.closerClicked = this.closerClicked.bind(this);
  }

  componentDidMount() {
    const { theme, openerSize, divPlacement, divSize } = this.state;
    const styles1 = { ...theme, ...openerSize };
    const styles2 = { ...divPlacement, ...divSize };
    this.setState({
      openerStyles: styles1,
      openerDivStyles: styles2,
    });
  }

  /* constructor's functions to set opener's state */
  static setTheme(theme) {
    switch (theme) {
      case 'red':
        return { backgroundColor: '#e42217', color: 'whitesmoke' };
      case 'yellow':
        return { backgroundColor: 'yellow', color: 'black' };
      case 'blue':
        return { backgroundColor: 'dodgerblue', color: 'whitesmoke' };
      case 'green':
        return { backgroundColor: '#87f717', color: 'black' };
      case 'orange':
        return { backgroundColor: '#f88017', color: 'whitesmoke' };
      case 'purple':
        return { backgroundColor: 'purple', color: 'whitesmoke' };
      case 'dark':
        return { backgroundColor: '#34282c', color: 'whitesmoke' };
      case 'light':
        return { backgroundColor: '#fefcff', color: '#34282c' };
      default:
        return { backgroundColor: 'dodgerblue', color: 'whitesmoke' };
    }
  }

  static setOpenerSize(size) {
    switch (size) {
      case 'small':
        return { fontSize: 'small' };
      case 'medium':
        return { fontSize: 'medium' };
      case 'large':
        return { fontSize: 'larger' };
      default:
        return { fontSize: 'medium' };
    }
  }

  static setDivSize(size) {
    switch (size) {
      case 'small':
        return { width: '90px', height: '30px' };
      case 'medium':
        return { width: '120px', height: '40px' };
      case 'large':
        return { width: '150px', height: '50px' };
      default:
        return { width: '120px', height: '40px' };
    }
  }

  static setDivPlacement(placement) {
    switch (placement) {
      case 'top':
        return {
          top: '1%',
          left: '50%',
          transform: 'translate(-50%)',
        };
      case 'top-right':
        return { top: '1%', right: '1%' };
      case 'right':
        return {
          top: '50%',
          right: '1%',
          transform: 'translateY(-50%)',
        };
      case 'bottom-right':
        return { bottom: '1%', right: '1%' };
      case 'bottom':
        return {
          bottom: '1%',
          left: '50%',
          transform: 'translate(-50%)',
        };
      case 'bottom-left':
        return { bottom: '1%', left: '1%' };
      case 'left':
        return {
          top: '50%',
          left: '1%',
          transform: 'translateY(-50%)',
        };
      case 'top-left':
        return { top: '1%', left: '1%' };
      default:
        return { bottom: '1%', right: '1%' };
    }
  }

  static setCloserPlacement(placement) {
    switch (placement) {
      case 'top':
        return {
          top: '108%',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'top-right':
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
      case 'right':
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
      case 'bottom-right':
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
      case 'bottom':
        return {
          bottom: '108%',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'bottom-left':
        return {
          top: '50%',
          left: '108%',
          transform: 'translateY(-50%)',
        };
      case 'left':
        return {
          top: '50%',
          left: '108%',
          transform: 'translateY(-50%)',
        };
      case 'top-left':
        return {
          top: '50%',
          left: '108%',
          transform: 'translateY(-50%)',
        };
      default:
        return {
          top: '50%',
          right: '108%',
          transform: 'translateY(-50%)',
        };
    }
  }

  static setAnimation(placement) {
    switch (placement) {
      case 'top':
        return 'T';
      case 'top-right':
        return 'R';
      case 'right':
        return 'R';
      case 'bottom-right':
        return 'R';
      case 'bottom':
        return 'B';
      case 'bottom-left':
        return 'L';
      case 'left':
        return 'L';
      case 'top-left':
        return 'L';
      default:
        return 'R';
    }
  }

  /* onClick functions */
  openerClicked() {
    const { toggleShowOpener, openerSetForm } = this.props;
    toggleShowOpener();
    openerSetForm(6);
  }

  closerClicked() {
    const { closerClicked } = this.props;
    closerClicked();
  }

  /* functions used upon rendering */
  checkShowOpener() {
    const { showOpener } = this.props;
    const { animation } = this.state;
    if (showOpener) {
      return `1s ${animation}appear both`;
    }
    return `1s ${animation}disappear both`;
  }

  checkShowOpener2() {
    const { showOpener } = this.props;
    if (showOpener) {
      return false;
    }
    return true;
  }

  addAnimations(str) {
    const { openerDivStyles } = this.state;
    const style1 = openerDivStyles;
    const style2 = { animation: str };
    const style3 = { ...style1, ...style2 };
    return style3;
  }

  render() {
    const { closerPlacement, openerStyles } = this.state;
    const str = this.checkShowOpener();
    const disabled = this.checkShowOpener2();
    const finalStyle = this.addAnimations(str);

    return (
      <div style={finalStyle} className="openerDiv">
        <button
          type="button"
          disabled={disabled}
          style={closerPlacement}
          onClick={this.closerClicked}
          className="closer"
        >
          &#10006;
        </button>
        <button
          disabled={disabled}
          type="button"
          style={openerStyles}
          className="opener"
          onClick={this.openerClicked}
        >
          Feedback
        </button>
      </div>
    );
  }
}

FeedbackBasic.propTypes = {
  theme: PropTypes.string.isRequired,
  openerSize: PropTypes.string.isRequired,
  openerPlacement: PropTypes.string.isRequired,
  showOpener: PropTypes.bool.isRequired,
  closerClicked: PropTypes.func.isRequired,
  toggleShowOpener: PropTypes.func.isRequired,
  openerSetForm: PropTypes.func.isRequired,
};
