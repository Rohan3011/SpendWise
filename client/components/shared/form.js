export const InputField = ({
  id,
  type,
  name,
  value,
  label,
  placeholder,
  required,
  error,
  touched,
  onChange,
  onBlur,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1 py-1">
      <label htmlFor={id} className="mt-1 text-xs font-light text-slate-500">
        {label} {required && "*"}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`border shadow-sm grow ${
          error && touched ? "outline-red-500" : "focus:outline-blue-500"
        } outline-2 outline-offset-[-2px] p-2 rounded text-lg text-slate-700 font-medium ${className}`}
      />
      <span hidden={!touched} className="font-light text-xs text-red-500">
        {error}
      </span>
    </div>
  );
};

export const TextAreaField = ({
  id,
  type,
  name,
  value,
  label,
  placeholder,
  required,
  error,
  touched,
  onChange,
  onBlur,
  className,
}) => {
  return (
    <div className="flex flex-col gap-1 py-1">
      <label htmlFor={id} className="mt-1 text-xs font-light text-slate-500">
        {label} {required && "*"}
      </label>
      <textarea
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        className={`border shadow-sm grow ${
          error && touched ? "outline-red-500" : "focus:outline-blue-500"
        } outline-2 p-2 rounded text-lg text-slate-700 font-medium ${className}`}
      />
      <span hidden={!touched} className="font-light text-xs text-red-500">
        {error}
      </span>
    </div>
  );
};
