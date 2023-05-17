const Button = ({ size, color }) => {
  return (
    <button className={`button button-${size} button-${color}`}>Button</button>
  );
};

export default Button;
