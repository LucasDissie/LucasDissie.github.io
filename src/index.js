import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import $ from 'jquery';
import { marked} from 'marked'
import Prism from 'prism';

let e;
function markdown() {
  "use strict";
  marked.setOptions({
      breaks: !0,
      highlight: function(e) {
          return Prism.highlight(e, Prism.languages.javascript, "javascript")
      }
  });
  e = new marked.Renderer;
  e.link = function(e, t, a) {
      return `<a target="_blank" href="${e}">${a}</a>`
  }
}

const i = t =>React.createElement("div", {
  dangerouslySetInnerHTML: {
      __html: marked(t.markdown, {
          renderer: e
      })
  },
  id: "preview"
})
const r = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n";

class MDpreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: r,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }
  render()  {
    const e = ["editorWrap", "previewWrap", "fa fa-arrows-alt"];
    return React.createElement("div", null, React.createElement("div", {
        className: e[0]
    }, React.createElement("textarea", {
        markdown: this.state.markdown,
        onChange: this.handleChange,
        id: "editor",
        value: this.state.markdown,
        type: "text"
    })), React.createElement("div", {
        className: "converter"
    }), React.createElement("div", {
        className: e[1]
    }, React.createElement(i, {
        markdown: this.state.markdown
    })))
  } 
}

markdown();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MDpreview />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/marked/2.0.3/marked.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"></script>    
  </React.StrictMode>
);

