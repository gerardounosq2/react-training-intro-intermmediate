import Pet from "./Pet";

const PetList = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((p) => {
          return (
            <Pet
              key={p.id}
              animal={p.name}
              breed={p.breed}
              name={p.name}
              images={p.images}
              location={`${p.city}, ${p.state}`}
            />
          );
        })
      )}
    </div>
  );
};

export default PetList;
