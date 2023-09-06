const parseHTML = require('html2obj-maciej-kolber'); // Update the import path as needed

describe('parseHTML', () => {
  it('should correctly parse HTML into an object', () => {
    const html = `
      <div style="background-color: yellow; font-size: 14px" id="first-div">
        Hello, friends
        <p class="para" style="font-family: monospace; font-size: 11px">
          Lorem ipsum dolor sit
        </p>
        <footer style="width: auto; height: 100px; color: blue">
          <span>
            This is the end
          </span>
        </footer>
      </div>
    `;

    const result = parseHTML(html);

    expect(result).toEqual({
      tag: 'div',
      text: 'Hello, friends',
      style: {
        'background-color': 'yellow',
        'font-size': '14px'
      },
      id: 'first-div',
      children: [
        {
          tag: 'p',
          text: 'Lorem ipsum dolor sit',
          class: 'para',
          style: {
            'font-family': 'monospace',
            'font-size': '11px'
          }
        },
        {
          tag: 'footer',
          style: {
            width: 'auto',
            height: '100px',
            color: 'blue'
          },
          children: [
            {
              tag: 'span',
              text: 'This is the end'
            }
          ]
        }
      ]
    });
  });
});