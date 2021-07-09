const Form = (props) => {
  return (
    <form className="form">
      <h2 className="form--title heading--secondary">{props.title}</h2>
      {props.children}
    </form>
  );
};

export default Form;
