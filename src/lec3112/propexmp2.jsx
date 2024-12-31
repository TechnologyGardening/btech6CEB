import * as React from "react";
class MyList extends React.Component {
  render() {
    const { itms } = this.props;
    return (
      <ul>
        {itms.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }
}
export default MyList;

// import * as React from "react";
// class MyButton extends React.Component {
//   render() {
//     const { prop1, xyz } = this.props;
//     return <button disabled={prop1}>{xyz}</button>;
//   }
// }
// export default MyButton;
