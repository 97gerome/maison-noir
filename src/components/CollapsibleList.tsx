import { FC, useState } from "react";
import CollapsibleItem, { CollapsibleItemProps } from "./CollapsibleItem";

export interface CollapsibleListProps {
  items: Array<CollapsibleItemProps>;
  isNumbered?: boolean;
}

const CollapsibleList: FC<CollapsibleListProps> = ({
  items,
  isNumbered = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    setCurrentIndex((current) => (current === index ? null : index));
  };

  return (
    <ol className="collapsible-list">
      {items.map(({ title, body }, index) => (
        <CollapsibleItem
          key={title}
          number={isNumbered ? index + 1 : undefined}
          title={title}
          body={body}
          isOpen={currentIndex === index}
          onClick={() => handleItemClick(index)}
          isLastItem={index >= items.length - 1}
        />
      ))}
    </ol>
  );
};

export default CollapsibleList;
