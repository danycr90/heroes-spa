import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from 'query-string';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  const { q = ''} = queryString.parse( location.search );

  const { searchText, onInputChange, onResetForm } = useForm({searchText: ''});

  const handleSearchSubmit = ( event ) => {
    event.preventDefault();

    if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);

    console.log({ searchText });

    onResetForm();
}

  return (
    <>
    <h1>Search</h1>
    <hr />

    <div className="row">
      <div className="col-5">
        <h4>Searching</h4>
        <hr />

        <form onSubmit={ handleSearchSubmit }>
          <input 
            type="text" 
            placeholder="Search a hero" 
            className="form-control" 
            name="searchText" 
            autoComplete="off" 
            value={ searchText }
            onChange={ onInputChange }
          />

          <button 
            className="btn btn-outline-primary mt-1">
            Search
          </button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr />

        <div className="alert alert-primary">
          Search a hero
        </div>

        <div className="alert alert-danger">
          There's no results for <b>{ q }</b>
        </div>

        {/* <HeroCard /> */}
        
      </div>
    </div>
    </>
  )
}
