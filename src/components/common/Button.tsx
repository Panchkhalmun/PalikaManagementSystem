
interface propsType {
  name: string;
  isLoading?: boolean;
  type?: "submit";
}

const Button: React.FC<propsType> = ({ name, isLoading, type }) => {
  return (
    <div>
      <button
        disabled={isLoading}
        className={`${
          isLoading
            ? "flex items-center px-4 py-2 text-green-50 rounded-lg bg-gray-600 lg:text-lg md:text-base text-sm hover:shadow-lg opacity-55"
            : " flex items-center px-4 py-2 text-green-50 rounded-lg bg-gray-600 lg:text-lg md:text-base text-sm hover:shadow-lg"
        }`}
        type={type}
      >
        {isLoading ? "Loading" : name}
      </button>
    </div>
  );
};

export default Button;
