const FormRow = ({ type, name, labelText, ...rest }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        {...rest}
      />
    </div>
  );
};

export default FormRow;
