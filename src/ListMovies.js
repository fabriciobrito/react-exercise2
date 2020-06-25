import React, {Component} from 'react';
import ListFans from './ListFans.js';

class ListMovies extends Component {
  render(){
    const {movies, profiles, users} = this.props;
    return (
      	<div>
      		{Object.keys(movies).map(i => (
    			<span>		
      				<h2>{movies[i].name}</h2>
					<ListFans movie={movies[i].id} profiles={profiles} users={users}/>
				</span>
    		))}
		</div>
    )
  }
}

export default ListMovies;