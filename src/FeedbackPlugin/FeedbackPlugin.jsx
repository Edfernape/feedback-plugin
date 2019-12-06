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
  static checkTheme(theme) {
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

  static checkOpenerPlacement(openerPlacement) {
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

  static checkOpenerSize(openerSize) {
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

  constructor(props) {
    super(props);
    const {
      theme,
      openerType,
      openerPlacement,
      openerSize,
      formIsPopup,
      formPlacement,
      popupWidth,
      popupHeight,
      popupUrl,
      postUrl,
    } = this.props;
    this.state = {
      theme: FeedbackPlugin.checkTheme(theme),
      openerType,
      openerPlacement: FeedbackPlugin.checkOpenerPlacement(
        openerPlacement,
      ),
      openerSize: FeedbackPlugin.checkOpenerSize(openerSize),
      showOpener: true,
      formIsPopup,
      formPlacement,
      formCategory: null,
      showForm: null,
      popupWidth,
      popupHeight,
      popupUrl,
      postUrl,
    };
    this.openerSetForm = this.openerSetForm.bind(this);
    this.toggleShowOpener = this.toggleShowOpener.bind(this);
    this.toggleShowForm = this.toggleShowForm.bind(this);
    this.closerClicked = this.closerClicked.bind(this);
  }

  openerSetForm(cat) {
    switch (cat) {
      case 1:
        this.setState({ formCategory: 1, showForm: true });
        break;
      case 2:
        this.setState({ formCategory: 2, showForm: true });
        break;
      case 3:
        this.setState({ formCategory: 3, showForm: true });
        break;
      case 4:
        this.setState({ formCategory: 4, showForm: true });
        break;
      case 5:
        this.setState({ formCategory: 5, showForm: true });
        break;
      case 6:
        this.setState({ formCategory: 6, showForm: true });
        break;
      default:
        this.setState({ formCategory: 4, showForm: true });
    }
  }

  toggleShowOpener() {
    const { showOpener } = this.state;
    const a = !showOpener;
    this.setState({ showOpener: a });
  }

  closerClicked() {
    this.setState({ showOpener: false });
  }

  toggleShowForm() {
    const { showForm } = this.state;
    const a = !showForm;
    this.setState({ showForm: a });
  }

  checkOpenerType(openerType) {
    const {
      theme,
      openerSize,
      openerPlacement,
      showOpener,
    } = this.state;
    switch (openerType) {
      case 'basic':
        return (
          <FeedbackBasic
            theme={theme}
            openerSize={openerSize}
            openerPlacement={openerPlacement}
            openerSetForm={this.openerSetForm}
            showOpener={showOpener}
            toggleShowOpener={this.toggleShowOpener}
            closerClicked={this.closerClicked}
          />
        );
      case 'carousel':
        return (
          <FeedbackCarousel
            theme={theme}
            openerSize={openerSize}
            openerPlacement={openerPlacement}
            openerSetForm={this.openerSetForm}
            showOpener={showOpener}
            toggleShowOpener={this.toggleShowOpener}
            closerClicked={this.closerClicked}
          />
        );
      default:
        return (
          <FeedbackBasic
            theme={theme}
            openerSize={openerSize}
            openerPlacement={openerPlacement}
            openerSetForm={this.openerSetForm}
            showOpener={showOpener}
            toggleShowOpener={this.toggleShowOpener}
            closerClicked={this.closerClicked}
          />
        );
    }
  }

  checkFormType(
    formIsPopup,
    showForm,
    popupUrl,
    popupWidth,
    popupHeight,
  ) {
    const {
      theme,
      formPlacement,
      formCategory,
      postUrl,
    } = this.state;
    if (showForm === null) {
      return null;
    }
    if (formIsPopup === true) {
      if (showForm === true) {
        popupWindow(popupUrl, '', window, popupWidth, popupHeight);
      }
    } else if (showForm === true) {
      return (
        <FeedbackForm
          theme={theme}
          formPlacement={formPlacement}
          formCategory={formCategory}
          toggleShowForm={this.toggleShowForm}
          toggleShowOpener={this.toggleShowOpener}
          postUrl={postUrl}
        />
      );
    }
    return null;
  }

  render() {
    const {
      openerType,
      formIsPopup,
      showForm,
      popupUrl,
      popupWidth,
      popupHeight,
    } = this.state;
    const opener = this.checkOpenerType(openerType);
    const form = this.checkFormType(
      formIsPopup,
      showForm,
      popupUrl,
      popupWidth,
      popupHeight,
    );

    return (
      <div style={{ zIndex: '3000000' }}>
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
  popupWidth: PropTypes.number,
  popupHeight: PropTypes.number,
  popupUrl: PropTypes.string,
  postUrl: PropTypes.string,
};

FeedbackPlugin.defaultProps = {
  theme: 'blue',
  openerType: 'basic',
  openerPlacement: 'bottom-right',
  openerSize: 'medium',
  formIsPopup: false,
  formPlacement: 'centre',
  popupWidth: null,
  popupHeight: null,
  popupUrl: '',
  postUrl: '',
};
