# feedback-plugin
A feedback submission prototype for React applications.

## Contents
1. [Description](#desc)
2. [Usage](#usg)<br>
    2.1 [Installation](#installation)<br>
    2.2 [Import the Plugin](#import)<br>
    2.3 [Add in the Plugin](#add)<br>
    2.4 [The Form Data](#formdata)<br>
3. [Customizations](#cust)
4. [The formIsPopup prop](#popup)<br>
    4.1 [False (Default)](#false)<br>
    4.2 [True](#true)<br>
5. [Demo](#demo)

## 1. <span id="desc">Description</span>
`feedback-plugin` is a frontend module that can be added to React applications.  It gives visitors of a website an avenue to send feedback - be it bug reports, feature suggestions, or any feedback in general.  Please be informed that this plugin is made by an amateur.  The code may not be the most conventional or optimal.

## 2. <span id="usg">Usage</span>
### 2.1 <span id="installation">Installation</span>
Before the plugin can be used, first navigate to the React project's root folder in the terminal and enter the command

```
npm install feedback-plugin
```

### 2.2 <span id="import">Import the Plugin</span>
In the file of the highest level React component, add in the following import statement at the start of the file.

```js
import FeedbackPlugin from 'feedback-plugin';
```

### 2.3 <span id="add">Add in the Plugin</span>
It is assumed that a server exists to handle form data submitted by the plugin.  The absolute URL of this server should be specified in the plugin's `postUrl` prop.

```js
<FeedbackPlugin postUrl="http://www.example.com/post-feedback" />
```

For ways to configure and customize the plugin, see [_Customizations_](#cust) and [_formIsPopup_](#popup).

### 2.4 <span id="formdata">The Form Data</span>
The plugin sends form data using [HTTP POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST).  These data can be accessed from the POST request's body.

#### Data Sent upon Form Submission:
Name|Data Type|Remarks
---|---|---
category|Number|Indicates which category the feedback falls under.  Ranges from 1 to 5.
title|String|The title or subject given to the feedback.  Has a maximum length of 150.
mainText|String|The feedback itself.  Has a maximum length of 1000.
Rating|Number|How urgent or important the feedback is, rated by the user.  Ranges from 1 to 5.

The _category_ field, as shown in the table above, can be a number ranging from 1 to 5.  Each of these numbers stand for a unique feedback category.

#### Feedback Categories:
Category Number|Category Name
---|---
1|Vulnerability Report
2|Bug Report
3|Usability Issue
4|General Feedback
5|Feature Suggestion

#### An Example of the Form Data Submitted:

```
{
    category: 4,
    title: 'Too many ads',
    mainText: 'Your website has too many ads and they are very distracting.  Removing at least half of them would be good.',
    rating: 5
}
```

From this example, the category of 4 means that the user has chosen _General Feedback_ as the feedback category.  The user has also given a rating of 5 for their feedback, meaning that they consider their feedback to be really important.

## 3. <span id="cust">Customizations</span>
The plugin's characteristics, such as colour scheme, position, and size, can be customized through its props.

#### Props List:
Prop Name|Data Type|Possible Values|Default Value|Description
---|---|---|---|---
theme|String|red / yellow / blue / green / orange / purple / dark / light|blue|Defines the colour scheme of the plugin.
openerType|String|basic / carousel|basic|Defines whether the plugin appears with a basic or a carousel design.
openerPlacement|String|top / top-right / right / bottom-right / bottom / bottom-left / left / top-left|bottom-right|Defines where the plugin is positioned on the browser's window.
openerSize|String|small / medium / large|medium|Defines how large the plugin would appear.
formIsPopup|Boolean|true / false|false|Defines whether the plugin brings up the form within the same window or a new window.  If `true`, `popupUrl` has to be configured.  If `false`, `postUrl` has to be configured.
formPlacement|String|top / top-right / right / bottom-right / bottom / bottom-left / left / top-left / centre|centre|Defines where the feedback form would appear on the browser's window.  This behaviour only applies when `formIsPopup` prop is false.
popupWidth|Number||null|Defines the width, in pixels, of the popup window.  Only applicable when `formIsPopup` is `true`.
popupHeight|Number||null|Defines the height, in pixels, of the popup window.  Only applicable when `formIsPopup` is `true`.
popupUrl|String||_empty string_|The URL of the form hosted on an external website.  Only applicable when `formIsPopup` is `true`.
postUrl|String||_empty string_|The URL of the server that handles the plugin's POST request.  Only applicable when `formIsPopup` is `false`.

## 4. <span id="popup">The formIsPopup prop</span>
The `formIsPopup` prop determines whether the plugin opens up the form within the same window or a new window.  Depending on whether it is `true` or `false`, the plugin has to be configured differently.

### 4.1 <span id="false">False (Default)</span>
By default, `formIsPopup` is `false` when not explicitly stated.  This means that the feedback form renders in the current window when the user clicks on the plugin.  In this case, there should be an existing server that is ready to accept and handle the form's data when it is submitted by the user.  The absolute URL of this server should be assigned to the `postUrl` prop like so

```js
<FeedbackPlugin formIsPopup={false} postUrl="http://www.example.com/post-feedback">
```

### 4.2 <span id="true">True</span>
If `formIsPopup` is `true`, the plugin opens up a new window when the user clicks on it.  This new window should direct the user to a form hosted on an external URL, such as a custom Google Form for example.  This URL should be assigned to the `popupUrl` prop.  Additionally, the `popupWidth` and `popupHeight` props can be configured to set the size of this new window.

```js
<FeedbackPlugin formIsPopup={true} popupUrl="https://docs.google.com/forms/exampleurl" popupWidth={500} popupHeight={500}>
```

## 5. <span id="demo">Demo</span>
To be updated.