const Form = (props) => {
  function handleSubmit(e) {
    props.onSubmit(e);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form--title heading--secondary">{props.title}</h2>
      {props.children}
    </form>
  );
};

export default Form;
