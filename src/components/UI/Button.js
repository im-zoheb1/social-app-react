const Button = (props) => {
  const variants = `btn ${props.variant}`;
  return (
    <button className={variants} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
