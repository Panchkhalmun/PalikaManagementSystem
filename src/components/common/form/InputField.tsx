import { UseFormReturn, FieldValues, Path } from "react-hook-form";

type Props<T extends FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  type: "text" | "number" | "email" | "password" | "file";
  placeholder?: string;
  value?: string;
  label?: string;
  isLoading?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
};

const InputFields = <T extends FieldValues>({
  form,
  name,
  placeholder,
  type,
  isLoading,
  value,
  onFocus,
  onBlur,
  label,
}: Props<T>) => {
  return (
    <div className="w-full">
      {label && <label>{label}</label>}
      <input
        value={value}
        disabled={isLoading}
        className="outline-none bg-page-bg-color border-[1px] rounded-xl border-gray-500 text-sub-heading p-2 w-full"
        type={type}
        placeholder={placeholder}
        {...form.register(name)}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default InputFields;
