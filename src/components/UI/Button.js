const Button = (props) => {
  const variants = `btn ${props.variant}`;
  return <button className={variants}>{props.children}</button>;
};

export default Button;
