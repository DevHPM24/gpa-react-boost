import { useState } from "react";

interface Props {
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  function displayContent() {
    return items.map((place, index) => (
      <li
        key={index}
        className={
          index === selectedIndex ? "list-group-item active" : "list-group-item"
        }
        onClick={() => {
          setSelectedIndex(index);
          onSelectItem(place);
        }}
      >
        {place}
      </li>
    ));
  }

  return (
    <>
      {items.length === 0 && <p>No items to display.</p>}
      <ul className="list-group">{displayContent()}</ul>
    </>
  );
}

export default ListGroup;
