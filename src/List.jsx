import Person from './Person';

/**
 * List: presentational component that renders one Person per item.
 * @param {Object} props
 * @param {Array<{id: number, name: string, age: number, image: string}>} props.people - Array from App state
 */
const List = ({ people }) => {
  return (
    <section>
      {/* key={person.id} helps React track items when list changes; required in lists */}
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
};

export default List;
