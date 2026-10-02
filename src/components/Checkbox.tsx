type ChecboxProps = {
  options: string[];
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Checkbox({
  value,
  options,
  setValue,
  ...props
}: ChecboxProps) {
  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option} htmlFor={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
            {...props}
          />

          {option}
        </label>
      ))}
    </>
  );
}
