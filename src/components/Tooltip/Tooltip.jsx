import './index.css';
const Tooltip = ({ removeHover, addHover, id, name }) => {
  return (
    <div
      className="tooltip"
      onMouseEnter={addHover}
      onMouseLeave={removeHover}
      id={id}
    >
      <div className="tool" id={id}>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index}>{name} </span>
        ))}
      </div>
    </div>
  );
};

export default Tooltip;
