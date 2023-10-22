'use client';
import { useField } from "formik";
// interface CustomInputProps {
//   label: string;
//   name: string;
//   placeholder?: string;
// }
const CustomInput = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.name}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...field}
        {...props}
        className="grid"
      />

      {meta.touched && meta.error && (
        <div className="text-red">{meta.error}</div>
      )}
    </div>
  );
};

export default CustomInput;
