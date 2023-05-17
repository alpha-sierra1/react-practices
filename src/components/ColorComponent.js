const ColorComponent = (props) => {
  const divStyle = {
    backgroundColor: props.color,
  };

  return <div style={divStyle}>{props.children}</div>;
};

export default ColorComponent;
