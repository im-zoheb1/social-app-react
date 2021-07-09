const FormInput = (props) => {
  return (
    <div className="form__input">
      <div className="form__input-content">
        <input
          className="form__input--input"
          type={props.type || 'text'}
          placeholder={props.placeholder}
          required={props.required}
        />
        <div className="form__input--border"></div>
        <label className="form__input--label">{props.placeholder}</label>
      </div>
    </div>
  );
};

export default FormInput;
