/* props available:
theme = red|yellow|blue|green|orange|purple|dark|light
formPlacement = top|top-right|right|bottom-right|bottom|bottom-left|left|top-left|centre
formCategory = null|bugReport|vulnerabilityReport|general|featureSuggestion|usabilityIssue|selection
showForm = true|false|null

toggleShowForm method
toggleShowOpener method

local states:
formPage = 1|2|3
formStyles
*/

import React from 'react';
import PropTypes from 'prop-types';
import './FeedbackForm.css';
import PageSelect from './PageSelect/PageSelect';
import PageForm from './PageForm/PageForm';

export default class FeedbackForm extends React.Component {
  /* local drag function */
  static drag() {
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    function stopDrag() {
      /* stop moving when mouse button is released: */
      document.onmouseup = null;
      document.onmousemove = null;
    }
    function startDrag(e) {
      const e1 = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e1.clientX;
      pos2 = pos4 - e1.clientY;
      pos3 = e1.clientX;
      pos4 = e1.clientY;
      // set the element's new position:
      document.getElementById(
        'form',
      ).style.top = `${document.getElementById('form').offsetTop -
        pos2}px`;
      document.getElementById(
        'form',
      ).style.left = `${document.getElementById('form').offsetLeft -
        pos1}px`;
    }
    function handleDrag(e) {
      const e1 = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e1.clientX;
      pos4 = e1.clientY;
      document.onmouseup = stopDrag;
      // call a function whenever the cursor moves:
      document.onmousemove = startDrag;
    }
    document.getElementById('formdragbar').onmousedown = handleDrag;
  }

  constructor(props) {
    super(props);
    const { theme, formPlacement, formCategory } = this.props;
    this.state = {
      theme: FeedbackForm.setTheme(theme),
      formPlacement: FeedbackForm.setPlacement(formPlacement),
      formCategory,
      formPage: 1,
      formStyles: {},
    };
    // this.drag = this.drag.bind(this);
    this.formCloserClicked = this.formCloserClicked.bind(this);
    this.childSetPage = this.childSetPage.bind(this);
    this.setCat = this.setCat.bind(this);
  }

  componentDidMount() {
    const { formCategory } = this.props;
    const { theme, formPlacement } = this.state;
    this.checkCategory(formCategory);
    const placement = formPlacement;
    const styles = { ...theme, ...placement };
    this.setState({ formStyles: styles });
  }

  componentDidUpdate() {
    const { formPage } = this.state;
    if (formPage === 3) {
      setTimeout(this.formCloserClicked, 800);
    }
  }

  /* functions to set form state */
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

  static setPlacement(placement) {
    switch (placement) {
      case 'top':
        return {
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'top-right':
        return { top: '20px', right: '20px' };
      case 'right':
        return {
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
        };
      case 'bottom-right':
        return { bottom: '20px', right: '20px' };
      case 'bottom':
        return {
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        };
      case 'bottom-left':
        return { bottom: '20px', left: '20px' };
      case 'left':
        return {
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
        };
      case 'top-left':
        return { top: '20px', left: '20px' };
      case 'centre':
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
      default:
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        };
    }
  }

  /* children's functions */

  setCat(cat) {
    this.setState({ formCategory: cat });
  }

  setPage(page) {
    const { formCategory } = this.state;
    switch (page) {
      case 1:
        return (
          <PageSelect
            formCategory={formCategory}
            setCat={this.setCat}
            childSetPage={this.childSetPage}
          />
        );
      case 2:
        return (
          <PageForm
            formCategory={formCategory}
            setCat={this.setCat}
            childSetPage={this.childSetPage}
          />
        );
      case 3:
        return (
          <h2
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
            }}
          >
            Thank you!
          </h2>
        );
      default:
        return (
          <PageSelect
            formCategory={formCategory}
            setCat={this.setCat}
            childSetPage={this.childSetPage}
          />
        );
    }
  }

  checkCategory(cat) {
    if (cat !== 6) {
      this.setState({ formPage: 2 });
    } else {
      this.setState({ formPage: 1 });
    }
  }

  childSetPage(page) {
    this.setState({ formPage: page });
  }

  formCloserClicked() {
    const { toggleShowForm, toggleShowOpener } = this.props;
    toggleShowForm();
    toggleShowOpener();
  }

  render() {
    const { formPage, formStyles } = this.state;
    const page = this.setPage(formPage);

    return (
      <div style={formStyles} className="form" id="form">
        <div
          onMouseOver={FeedbackForm.drag}
          className="formdragbar"
          id="formdragbar"
        />
        <button
          onClick={this.formCloserClicked}
          type="button"
          className="formCloser"
        >
          &#10006;
        </button>
        {page}
      </div>
    );
  }
}

FeedbackForm.propTypes = {
  theme: PropTypes.string.isRequired,
  formPlacement: PropTypes.string.isRequired,
  formCategory: PropTypes.number.isRequired,
  toggleShowOpener: PropTypes.func.isRequired,
  toggleShowForm: PropTypes.func.isRequired,
};