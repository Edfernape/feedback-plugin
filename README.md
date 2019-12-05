# feedback-plugin
A feedback submission prototype for React applications.

## Contents
1. [Description](#desc)
2. [Usage](#usg)
3. [Customizations](#cust)

## 1. <span id="desc">Description</span>
`feedback-plugin` is a frontend module that can be added to React applications.<br>
It gives visitors of a website an avenue to send feedback - be it bug reports, feature suggestions, or any feedback in general.<br>
Please be informed that this plugin is made by an amateur.  The code may not be the most conventional or optimal.

## 2. <span id="usg">Usage</span>
### 2.1 Installation
Before the plugin can be used, first navigate to the React project's root folder in the terminal and enter the command `npm install feedback-plugin`.

### 2.2 Import the Plugin
In the file of the highest level React component, add in the following import statement at the start of the file.

```js
import FeedbackPlugin from 'feedback-plugin';
```

### 2.3 Add in the Plugin
It is assumed that a server exists to handle form data submitted by the plugin.  The absolute URL of this server should be specified in the plugin's `postUrl` prop.

```js
<FeedbackPlugin postUrl="http://www.example.com/post-feedback" />
```

### 2.4 The Form Data
The plugin sends form data using [HTTP POST]("https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST).  These data can be accessed from the POST request's body.

Name|Data Type|Remarks
---|---|---
category|Number|Indicates which [category](#cat) the feedback falls under.  Ranges from 1 to 5.
title|String|The title or subject given to the feedback.  Has a maximum length of 150.
mainText|String|The feedback itself.  Has a maximum length of 1000.
Rating|Number|How urgent or important the feedback is, rated by users.  Ranges from 1 to 5.

<span id="cat"></span>
Category Number|Category Name
---|---
1|Vulnerability Report
2|Bug Report
3|Usability Issue
4|General Feedback
5|Feature Suggestion

## 3. <span id="cust">Customizations</span>
The plugin's customizations, such as colour scheme, position, and size, can be configured through its props.

Prop Name|Data Type|Possible Values|Default Value|Description
---|---|---|---|---|---
theme|String|red / yellow / blue / green / orange / purple / dark / light|blue|Defines the colour scheme of the plugin.
openerType|String|basic / carousel|basic|Defines whether the plugin appears with a basic or a carousel design.
openerPlacement|String|top / top-right / right / bottom-right / bottom / bottom-left / left / top-left|bottom-right|Defines where the plugin is positioned on the browser's window.
openerSize|String|small / medium / large|medium|Defines how large the plugin would appear.
formIsPopup|Boolean|true / false|false|Defines whether the plugin brings up the form within the same window or a new window.  If `true`, [`popupUrl`](#popupUrl) has to be configured.  If `false`, [`postUrl`](#postUrl) has to be configured.
formPlacement|String|top / top-right / right / bottom-right / bottom / bottom-left / left / top-left|center|Defines where the feedback form would appear on the browser's window.  This behaviour only applies when `formIsPopup` prop is false.
popupWidth|Number||null|Defines the width, in pixels, of the popup window.  Only applicable when `formIsPopup` is `true`.
popupHeight|Number||null|Defines the height, in pixels, of the popup window.  Only applicable when `formIsPopup` is `true`.
popupUrl|String||_empty string_|The URL of the form, hosted on an external website.  Only applicable when `formIsPopup` is `true`.
postUrl|String||_empty string_|The URL of the server that handles the plugin's POST request.  Only applicable when `formIsPopup` is `false`.