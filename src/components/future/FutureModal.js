import "./FutureModal.css";

function FutureModal({
  futureOpen,
  setFutureOpen,
  futureGoals,
  checkedGoals,
  setCheckedGoals,
}) {
  if (!futureOpen) return null;

  const toggleGoal = (index) => {
    setCheckedGoals((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <div className="shop-overlay">
      <div className="shop-modal">
        <button className="close-shop" onClick={() => setFutureOpen(false)}>
          ✖
        </button>

        <h2>Our Future</h2>

        <div className="future-grid">
          {futureGoals.map((goal, index) => {
            const checked = checkedGoals.includes(index);

            return (
              <div
                key={index}
                className="future-card"
                onClick={() => toggleGoal(index)}
              >
                <span className={`checkbox ${checked ? "checked" : ""}`}>
                  {checked && "✓"}
                </span>

                <span className="future-text">{goal}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FutureModal;
