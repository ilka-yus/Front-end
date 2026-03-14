import { useState, useMemo } from "react";
import * as ReactWindow from 'react-window';
import { generateItems } from "../utils/generateItems";

export function VirtualList() {
  const [filter, setFilter] = useState("");
  const items = useMemo(() => generateItems(10000), []);

  const filteredItems = useMemo(() => 
    items.filter(item => item.title.toLowerCase().includes(filter.toLowerCase())),
    [items, filter]
  );

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const item = filteredItems[index];
    return (
      <div style={{ ...style, borderBottom: '1px solid #eee', padding: '5px' }}>
        <strong>{item.title}</strong> - {item.category}
      </div>
    );
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter items..." 
        onChange={(e) => setFilter(e.target.value)} 
      />
      <ReactWindow.FixedSizeList 
        height={500} 
        itemCount={1000} 
        itemSize={50} 
        width={400}
        >
        {Row}
    </ReactWindow.FixedSizeList>
    </div>
  );
}