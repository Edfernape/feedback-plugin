/* props available:

theme = red|yellow|blue|green|orange|purple|dark|light
openerType = basic|carousel
openerPlacement = top|top-right|right|bottom-right|bottom|bottom-left|left|top-left
openerSize = small|medium|large
formIsPopup = true|false
formPlacement = top|top-right|right|bottom-right|bottom|bottom-left|left|top-left|centre

states:
all props, and
formCategory = null|bugReport|vulnerabilityReport|general|featureSuggestion|usabilityIssue|selection
showForm = null|true|false
showOpener = true|false
*/

import React from 'react';
import PropTypes from 'prop-types';
import FeedbackCarousel from './components/FeedbackCarousel/FeedbackCarousel';
import FeedbackBasic from './components/FeedbackBasic/FeedbackBasic';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';

function popupWindow(url, title, win, w, h) {
  const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
  const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
  return win.open(
    url,
    title,
    `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${w}, height=${h} , top=${y}, left=${x}`,
  );
}

export default class FeedbackPlugin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: this.checkTheme(this.props.theme),
      openerType: this.props.openerType,
      openerPlacement: this.checkOpenerPlacement(
        this.props.openerPlacement,
      ),
      openerSize: this.checkOpenerSize(this.props.openerSize),
      showOpener: true,
      formIsPopup: this.props.formIsPopup,
      formPlacement: this.props.formPlacement,
      formCategory: null,
      showForm: null,
    };
    this.openerSetForm = this.openerSetForm.bind(this);
    this.toggleShowOpener = this.toggleShowOpener.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
    this.closerClicked = this.closerClicked.bind(this);
  }

  /* constructor's functions to check props and use defaults if they're not specified */
  checkTheme(theme) {
    switch (theme) {
      case 'red':
        return 'red';
      case 'yellow':
        return 'yellow';
      case 'blue':
        return 'blue';
      case 'green':
        return 'green';
      case 'orange':
        return 'orange';
      case 'purple':
        return 'purple';
      case 'dark':
        return 'dark';
      case 'light':
        return 'light';
      default:
        return 'blue';
    }
  }

  checkOpenerPlacement(openerPlacement) {
    switch (openerPlacement) {
      case 'top':
        return 'top';
      case 'top-right':
        return 'top-right';
      case 'right':
        return 'right';
      case 'bottom-right':
        return 'bottom-right';
      case 'bottom':
        return 'bottom';
      case 'bottom-left':
        return 'bottom-left';
      case 'left':
        return 'left';
      case 'top-left':
        return 'top-left';
      default:
        return 'bottom-right';
    }
  }

  checkOpenerSize(openerSize) {
    switch (openerSize) {
      case 'small':
        return 'small';
      case 'medium':
        return 'medium';
      case 'large':
        return 'large';
      default:
        return 'medium';
    }
  }

  /* functions used by children */
  openerSetForm(cat) {
    switch (cat) {
      case 1:
        this.setState({ formCategory: 1, showForm: true }); // general feedback
        break;
      case 2:
        this.setState({ formCategory: 2, showForm: true }); // usability issue
        break;
      case 3:
        this.setState({ formCategory: 3, showForm: true }); // bug report
        break;
      case 4:
        this.setState({ formCategory: 4, showForm: true }); // vulnerability report
        break;
      case 5:
        this.setState({ formCategory: 5, showForm: true }); // feature suggestion
        break;
      case 6:
        this.setState({ formCategory: 6, showForm: true }); // shows all selection; page 1
        break;
      default:
        this.setState({ formCategory: 1, showForm: true }); // general feedback
    }
  }

  toggleShowOpener() {
    const a = this.state.showOpener;
    const b = !a;
    this.setState({ showOpener: b });
  }

  closerClicked() {
    this.setState({ showOpener: false });
  }

  toggleShowForm() {
    const a = this.state.showForm;
    const b = !a;
    this.setState({ showForm: b });
  }

  /* functions used upon rendering opener or form */
  checkOpenerType(openerType) {
    switch (openerType) {
      case 'basic':
        return (
          <FeedbackBasic
            theme={this.state.theme}
            openerSize={this.state.openerSize}
            openerPlacement={this.state.openerPlacement}
            openerSetForm={this.openerSetForm}
            showOpener={this.state.showOpener}
            toggleShowOpener={this.toggleShowOpener}
            closerClicked={this.closerClicked}
          />
        );
      case 'carousel':
        return (
          <FeedbackCarousel
            theme={this.state.theme}
            openerSize={this.state.openerSize}
            openerPlacement={this.state.openerPlacement}
            openerSetForm={this.openerSetForm}
            showOpener={this.state.showOpener}
            toggleShowOpener={this.toggleShowOpener}
            closerClicked={this.closerClicked}
          />
        );
      default:
        return (
          <FeedbackBasic
            theme={this.state.theme}
            openerSize={this.state.openerSize}
            openerPlacement={this.state.openerPlacement}
            openerSetForm={this.openerSetForm}
            showOpener={this.state.showOpener}
            toggleShowOpener={this.toggleShowOpener}
            closerClicked={this.closerClicked}
          />
        );
    }
  }

  checkFormType(formIsPopup, showForm) {
    if (showForm === null) {
      return null;
    }
    if (formIsPopup === true) {
      // popup form if showForm is true
      if (showForm === true) {
        popupWindow('http://localhost:8081', '', window, 400, 400);
      }
    } else if (showForm === true) {
      // render form depending on showForm true or false
      return (
        <FeedbackForm
          theme={this.state.theme}
          formPlacement={this.state.formPlacement}
          formCategory={this.state.formCategory}
          toggleShowForm={this.toggleShowForm}
          toggleShowOpener={this.toggleShowOpener}
        />
      );
    }
    return null;
  }

  render() {
    const opener = this.checkOpenerType(this.state.openerType);
    const form = this.checkFormType(
      this.state.formIsPopup,
      this.state.showForm,
    );

    return (
      <div>
        {opener}
        {form}
      </div>
    );
  }
}

FeedbackPlugin.propTypes = {
  theme: PropTypes.string,
  openerType: PropTypes.string,
  openerPlacement: PropTypes.string,
  openerSize: PropTypes.string,
  formIsPopup: PropTypes.bool,
  formPlacement: PropTypes.string,
};
