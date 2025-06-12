const FormRowSelect = ({
  name,
  labelText,
  list,
  defaultValue = '',
  value,
  onChange,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        {...(value !== undefined ? { value, onChange } : { defaultValue })}
      >
        {list.map(itemValue => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
