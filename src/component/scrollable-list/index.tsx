import React, { useEffect, useRef, useState } from "react";
import ScrollableListItem from "../atoms/scrollable-list-item";
import customerList from "../../mock/customer-list.json";

const ScrollableList: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const container = containerRef.current;
      const items = container.querySelectorAll(".item");
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        const itemTop = itemRect.top;
        const itemHeight = itemRect.height;

        // Check if the item is in the center of the viewport
        if (
          itemTop <= containerTop + containerRect.height / 2 &&
          itemTop + itemHeight >= containerTop + containerRect.height / 2
        ) {
          setActiveIndex(index);
        }
      });
    };

    // Add scroll event listener when the component mounts
    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when the component unmounts
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    if (!containerRef.current) return;
    const container = containerRef.current;
    const items = container.querySelectorAll(".item");
    const item = items[index] as HTMLElement;
    const scrollOffset =
      item.offsetTop -
      container.offsetTop -
      (container.offsetHeight - item.offsetHeight) / 2;
    container.scrollTo({
      top: scrollOffset,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="h-96 overflow-y-scroll flex flex-col justify-center"
      ref={containerRef}
    >
      {customerList.map((customer, index) => (
        <ScrollableListItem
          key={`scrollList-${index}`}
          value={customer}
          isActive={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default ScrollableList;
