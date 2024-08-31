import searchCss from "./SearchBox.module.css"

export default function SearchBox({ filter, onFilterChange }) {


  return (
    <div className={searchCss.searchBox}>
      <p className={searchCss.searchBoxText}>Find contacts by name</p>
      <input className={searchCss.searchBoxInput} type="text" value={filter} onChange={(e) => onFilterChange(e.target.value)} />

    </div>
  );

}