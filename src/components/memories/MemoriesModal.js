import { useEffect, useState } from "react";
import "./MemoriesModal.css";

function MemoriesModal({ memoriesOpen, setMemoriesOpen, memories }) {
  const [selectedMemory, setSelectedMemory] = useState(null);

  useEffect(() => {
    if (selectedMemory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMemory]);

  if (!memoriesOpen) return null;

  const sortedMemories = [...memories].sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );

  return (
    <div className="shop-overlay">
      <div className="shop-modal">
        <button className="close-shop" onClick={() => setMemoriesOpen(false)}>
          ✖
        </button>

        <h2>Our Memories</h2>

        <div className="memories-grid">
          {sortedMemories.map((memory, index) => (
            <div key={index} className="memory-card">
              <img
                src={memory.img}
                alt="memory"
                onClick={() => setSelectedMemory(memory)}
              />
              <h3>{memory.title}</h3>
              <p className="date">{memory.date}</p>
              <p>{memory.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedMemory && (
        <div
          className="fullscreen-memory"
          onClick={() => setSelectedMemory(null)}
        >
          <div
            className="fullscreen-content"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
          >
            <img src={selectedMemory.img} alt="memory" />
            <h2>{selectedMemory.title}</h2>
            <p>{selectedMemory.date}</p>
            <p>{selectedMemory.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MemoriesModal;
