export default function TabButton({ label, onSelect, isSelected }) {
  console.log("TABBUTTON COMPONENT EXEVUTING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {label}
      </button>
    </li>
  );
}
