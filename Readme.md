# HTML Parser

This is a JavaScript module for parsing HTML strings and converting them into structured objects. It uses the [JSDOM](https://github.com/jsdom/jsdom) library to create a DOM environment and then recursively parses HTML nodes and their children.

## Installation

You can install this module using npm or yarn:

```bash
npm install html2obj-maciej-kolber
npm install --save-dev jest
```

## Run Command

```bash
npm start 'your-html-file'('markup.html')
```

## Usage

Once installed, you can use the `parseHTML` function in your JavaScript code as follows:

```javascript
const parseHTML = require("html2obj-maciej-kolber");

const htmlString =
  '<div style="background-color: yellow; font-size: 14px" id="first-div">Hello, friends <p class="para" style="font-family: monospace; font-size: 11px">Lorem ipsum dolor sit</p><footer style="width: auto; height: 100px; color: blue"><span>This is the end</span></footer><div>';

const parsedObject = parseHTML(htmlString);

console.log(parsedObject);
```

### Function: parseHTML(html)

This function takes an HTML string as input and returns a structured object representing the parsed HTML. The object structure includes the following properties:

- `tag`: The HTML tag name (lowercased).
- `id`: The `id` attribute of the element (if present).
- `class`: The `class` attribute of the element, stored as a string or an array if there are multiple classes.
- `style`: An object containing CSS style properties and their values.
- `text`: The text content of the element (only for top-level non-empty text nodes).
- `children`: An array of child elements, each represented as a similar structured object.

If the HTML string does not contain a top-level `<div>` element, the function returns `null`.

## Example

Suppose you have the following HTML string:

```html
<div style="background-color: yellow; font-size: 14px" id="first-div">
  Hello, friends
  <p class="para" style="font-family: monospace; font-size: 11px">
    Lorem ipsum dolor sit
  </p>
  <footer style="width: auto; height: 100px; color: blue">
    <span> This is the end </span>
  </footer>
</div>
```

Using the `parseHTML` function on this string will result in the following parsed object:

```javascript
{
  "tag": "div",
  "id": "first-div",
  "style": {
    "background-color": "yellow",
    "font-size": "14px"
  },
  "text": "Hello, friends",
  "children": [
    {
      "tag": "p",
      "class": "para",
      "style": {
        "font-family": "monospace",
        "font-size": "11px"
      },
      "text": "Lorem ipsum dolor sit"
    },
    {
      "tag": "footer",
      "style": {
        "width": "auto",
        "height": "100px",
        "color": "blue"
      },
      "children": [
        {
          "tag": "span",
          "text": "This is the end"
        }
      ]
    }
  ]
}
```

## License

This module is distributed under the MIT License. Feel free to use and modify it according to your needs.

Please note that this module uses the JSDOM library internally, and you should review its licensing terms as well.
