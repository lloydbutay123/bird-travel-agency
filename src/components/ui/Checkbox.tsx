type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
};

export default function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
}: CheckboxProps) {
  return (
    <label
      className={`flex gap-2 items-center ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        name=""
        id=""
        className="h-4.5 w-4.5 accent-[#3AA9DC]"
      />
      <span className="text-[14px] font-medium">{label}</span>
    </label>
  );
}
