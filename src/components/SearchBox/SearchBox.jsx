import "./SearchBox.css"

export default function SearchBox({ filter, onFilterChange }) {


  return (
    <div className="search-box">
      <p className="search-box-text">Find contacts by name</p>
      <input className="search-box-input" type="text" value={filter} onChange={(e) => onFilterChange(e.target.value)} />

    </div>
  );

}