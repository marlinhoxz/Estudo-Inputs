type SelectProps = {
  value: string;
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export default function Select({
  value,
  options,
  setValue,
  ...props
}: SelectProps) {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...props}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
