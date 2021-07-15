const FormInput = (props) => {
  const inputClass = `form__input--input ${props.size}`;
  const borderClass = `form__input--border ${props.size}`;
  const labelClass = `form__input--label ${props.size}`;

  return (
    <div className="form__input">
      <div className="form__input-content">
        <input
          className={inputClass}
          type={props.type || 'text'}
          placeholder={props.placeholder}
          required={props.required}
        />
        <div className={borderClass}></div>
        {props.label && <label className={labelClass}>{props.label}</label>}
      </div>
    </div>
  );
};

export default FormInput;
