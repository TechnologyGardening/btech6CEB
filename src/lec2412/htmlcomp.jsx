import * as React from "react";
class HtmlComponent extends React.Component {
  render() {
    return (
      <div>
        <label>Textbox</label>
        <input type="text" />
        <br />
        <label>Checkbox</label>
        <input type="checkbox" />
        <br />
        <label>Radiobutton</label>
        <input type="radio" />
        <br />
        <label>Color</label>
        <input type="color" />
        <br />
        <label>File</label>
        <input type="file" />
        <br />
        <label>Date</label>
        <input type="datetime-local" />
        <br />
      </div>
    );
  }
}
export default HtmlComponent;
