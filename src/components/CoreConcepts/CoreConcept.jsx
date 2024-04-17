import "./CoreConcept.css";

export default function CoreConcept({ title, descreption, img }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{descreption}</p>
    </li>
  );
}
