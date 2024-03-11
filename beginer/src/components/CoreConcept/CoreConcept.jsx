import "./CoreConcept.css";
// import "./data.js"

export default function CoreConcept(props, {TagType = "li"}) {
  return (
    <TagType>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </TagType>
  );
}
