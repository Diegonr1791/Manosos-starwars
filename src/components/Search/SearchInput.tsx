import { SearchIcon } from "@/assets/SearchIcon";
import { Input } from "@nextui-org/react";
type SearchInputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
};

const SearchInput = ({ onChange, placeholder, name }: SearchInputProps) => {
  return (
    <Input
      name={name}
      classNames={{
        base: "max-w-full sm:max-w-[20rem] h-10",
        mainWrapper: "h-full",
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        inputWrapper: [
          "bg-white",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "!cursor-text",
        ],
      }}
      placeholder={placeholder}
      size="sm"
      startContent={<SearchIcon size={18} color="#000" />}
      onChange={onChange}
    />
  );
};

export default SearchInput;
