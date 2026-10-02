type RadioProps = {
  value: string;
  options: string[];
  setValue: React.Dispatch<React.SetStateAction<string>>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Radio({
  value,
  options,
  setValue,
  ...props
}: RadioProps) {
  return (
    <>
      {options.map((option) => (
        <label key={option} htmlFor={option}>
          <input
            type="radio"
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            {...props}
          />

          {option}
        </label>
      ))}
    </>
  );
}
