import { categories } from "../utils/constants";

type Props = {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const Sidebar = ({
  selectedCategory,
  setSelectedCategory,
}: Props): JSX.Element => {
  return (
    <div className="flex flex-row md:flex-col overflow-y-auto h-auto md:h-[95%] gap-4 md:gap-6 scrollbar-hide mx-4 md:mx-0 py-2 md:py-6">
      {categories.map((category) => (
        <button
          className={`${
            category.name === selectedCategory && "bg-[#FC1503]"
          } flex justify-start items-center text-white rounded-full px-3 py-3 hover:bg-[#FC1503] group md:mx-4`}
          onClick={() => setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            className={`${
              category.name === selectedCategory ? "text-white" : "text-red-700"
            } mr-[10px] group-hover:text-white`}
          >
            {<category.icon size={20} />}
          </span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
