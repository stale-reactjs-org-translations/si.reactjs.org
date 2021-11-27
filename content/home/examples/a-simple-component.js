class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        ආයුබෝවන් {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="කවිඳු" />,
  document.getElementById('hello-example')
);
