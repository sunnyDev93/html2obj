# HTML Parser

This is a JavaScript module for parsing HTML strings and converting them into structured objects. It uses the [JSDOM](https://github.com/jsdom/jsdom) library to create a DOM environment and then recursively parses HTML nodes and their children.

## Installation

You can install this module using npm or yarn:

```bash
npm install html2obj-maciej-kolber
npm install --save-dev jest
```

## Usage

Once installed, you can use the `parseHTML` function in your JavaScript code as follows:

```javascript
const parseHTML = require("html2obj-maciej-kolber");

const htmlString =
  '<div id="container" class="main-content"><p>Hello, <span class="name">John</span>!</p></div>';

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
<div id="container" class="main-content">
  <p>Hello, <span class="name">John</span>!</p>
</div>
```

Using the `parseHTML` function on this string will result in the following parsed object:

```javascript
{
  "tag": "div",
  "id": "container",
  "class": "main-content",
  "children": [
    {
      "tag": "p",
      "children": [
        {
          "tag": "span",
          "class": "name",
          "text": "John"
        }
      ],
      "text": "Hello, John!"
    }
  ]
}
```

## License

This module is distributed under the MIT License. Feel free to use and modify it according to your needs.

Please note that this module uses the JSDOM library internally, and you should review its licensing terms as well.
