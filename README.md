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

### 2.2 Importing the Plugin
In the file of the highest level React component, add in the following import statement at the start of the file.

```js
import FeedbackPlugin from 'feedback-plugin';
```

### 2.3 Adding in the Plugin
The plugin can now be used in the file.  It should be placed right before the end of the enveloping tag.

```js
<EnvelopingTag>
    /* HTML Elements and/or React Components here. */
    <FeedbackPlugin />
</EnvelopingTag>
```

If the [HTML main](https://www.w3schools.com/tags/tag_main.asp) element is used, FeedbackPlugin should be outside of it.

```js
<EnvelopingTag>
    <main>
        /* HTML Elements and/or React Components here. */
    </main>
    <FeedbackPlugin />
</EnvelopingTag>
```

### 2.4 Handle the Form Submission

## 3. <span id="cust">Customizations</span>