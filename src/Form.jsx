import React, {useState} from 'react'

function Form() {
  const [name, setName] = useState ("");
  const [savedName, setSavedName] = useState ("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSavedName(name)
    setName("");
  }

  const handleNameDelete = () => {
    setSavedName("");
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Namn:
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Spara</button>
      </form>

      {savedName && (
        <div>
          <h3>{savedName}</h3>
          <button onClick={handleNameDelete}>Radera namn</button>
        </div>
      )}
    </div>
  );
}

export default Form;

