import { VirtualList } from "./components/VirtualList";

function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Lab 9.2: List Virtualization</h1>
      <p>Rendering 10,000 items efficiently using <code>react-window</code>.</p>
      
      <div style={{ 
        border: "2px solid #4A90E2", 
        borderRadius: "8px", 
        padding: "15px",
        backgroundColor: "#f9f9f9" 
      }}>
        <VirtualList />
      </div>

      <div style={{ marginTop: "30px", fontSize: "0.9em", color: "#555" }}>
        <h3>Why this is fast:</h3>
        <ul>
          <li>Only visible rows are present in the DOM.</li>
          <li>Memory usage stays constant regardless of list size.</li>
          <li>Filtering is optimized with <code>useMemo</code>.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;