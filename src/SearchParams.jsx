import { useState } from "react";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const breeds = [];
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          value={location}
          placeholder={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
        <label htmlFor="animal">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            disabled={breed.length === 0}
          >
            <option />
            {breeds.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
