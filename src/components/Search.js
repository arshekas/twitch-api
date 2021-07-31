import React from 'react'

function Search({ placeholder, handleChange }) {
    return (
        <div class="input-group">
            <div class="form-outline">
                <input 
                id="search-input" 
                type="search" 
                id="form1" 
                class="form-control"
                className="search"
                placeholder={placeholder}
                onChange={handleChange}
                />
                <label class="form-label" for="form1">Search</label>
            </div>
            <button id="search-button" type="button" class="btn btn-primary">
                <i class="fas fa-search"></i>
            </button>
            <MDBCol md="6">
            <form className="form-inline mt-4 mb-4">
              <MDBIcon icon="search" />
              <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
            </form>
          </MDBCol>
        </div>
    )
}

export default Search
