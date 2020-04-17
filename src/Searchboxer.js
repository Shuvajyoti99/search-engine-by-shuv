import React from 'react';

const SearchBoxer=({searchfields,searchChange})=>
{ return( 
	<div className="pa2">
	<input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="type for robofriends" onChange={searchChange} />
    </div>);
}
export default SearchBoxer;