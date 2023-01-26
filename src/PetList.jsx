import Pet from "./Pet";

const PetList = ({ pets }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
              id={p.id}
            />
          );
        })
      )}
    </div>
  );
};

export default PetList;
