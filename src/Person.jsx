/**
 * Person: displays one person card (avatar, name, age).
 * Props come from List via {...person} spread (id, name, age, image).
 */
const Person = ({ image, name, age }) => {
  return (
    <article className='person'>
      {/* alt={name} for accessibility and when image fails to load */}
      <img src={image} alt={name} className='img' />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};
export default Person;
