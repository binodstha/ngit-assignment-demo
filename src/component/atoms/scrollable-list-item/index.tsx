import { ScrollableListItemProps } from "../../../common/types";

import { FilePerson, CallIcon } from "../../icons";

const ScrollableListItem: React.FC<ScrollableListItemProps> = ({
  value,
  isActive,
  onClick,
}) => {
  const outerDivStyle = {
    width: isActive ? "440px" : "400px",
    height: isActive ? "100%" : "95%",
    transition: "width 0.4s ease-in-out, height 0.4s ease-in-out",
  };
  return (
    <div
      className="flex justify-center w-3x1 mx-auto z-10 item gap-4"
      onClick={onClick}
      style={outerDivStyle}
    >
      <div
        className=" bg-orange-600 border-4 border-opacity-15 border-orange-300 bg-opacity-40 shadow-2xl border-shadow-lg
         rounded-2xl p-4"
        style={outerDivStyle}
      >
        <div className="flex-none sm:flex">
          <div className="flex-auto sm:ml-5 justify-evenly">
            <div className="flex items-center justify-left sm:mt-2">
              <div className="flex items-left">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg shadow-inner text-gray-200 font-bold leading-none border-4 border-opacity-15 border-orange-300 bg-opacity-40 rounded-2xl p-4">
                    {value.first_name} {value.last_name}
                  </div>

                  <div className=" flex flex-auto text-gray-200 my-3">
                    <div className="border-opacity-15 border-orange-300 border-4 rounded-full h-[50px] w-[50px]"></div>
                    <div className="flex flex-col ml-3">
                      <span className="mr-3">{value.email}</span>
                      <span className="mr-3 border-r border-gray-600 max-h-0"></span>
                      <span>{value.address}</span>
                    </div>
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
