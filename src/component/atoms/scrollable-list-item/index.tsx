import { ScrollableListItemProps } from "../../../common/types";

import { FilePerson, CallIcon } from "../../icons";

const ScrollableListItem: React.FC<ScrollableListItemProps> = ({
  value,
  isActive,
  onClick,
}) => {
  return (
    <div className="max-w-3xl w-full mx-auto z-10 item" onClick={onClick}>
      <div className="flex flex-col"></div>
      <div
        className={`transition-colors duration-1000 ${
          isActive ? "bg-gray-600" : "bg-white"
        } border border-gray-${
          isActive ? 800 : 300
        } shadow-lg rounded-3xl p-4 m-2`}
      >
        <div className="flex-none sm:flex">
          <div className="flex-auto sm:ml-5 justify-evenly">
            <div className="flex items-center justify-left sm:mt-2">
              <div className="flex items-left">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg text-gray-200 font-bold leading-none">
                    {value.first_name} {value.last_name}
                  </div>
                  <div className="flex-auto text-gray-400 my-1">
                    <span className="mr-3">{value.email}</span>
                    <span className="mr-3 border-r border-gray-600 max-h-0"></span>
                    <span>{value.address}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-2 text-sm text-gray-400">
              <div className="flex-1 inline-flex items-center">
                <FilePerson />
                <p className="pl-2">{value.job}</p>
              </div>
              <div className="flex-1 inline-flex items-center">
                <CallIcon />
                <p className="pl-2">{value.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollableListItem;
