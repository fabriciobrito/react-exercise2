import React, {Component} from 'react';

class ListFans extends Component{
  render(){
    const {movie, profiles, users} = this.props;
    let output = null, votes = profiles.filter(profile => (+profile.favoriteMovieID === movie));
    output = votes.length?
      	<span>
      		<p>Liked By:</p>
      		<ul>
      			{votes.map(profile => (
                  <li>{users[profile.id].name}</li>
            	))}
        	</ul>
      	</span>
    :
    	<p>None of the current users liked this movie</p>
    
    return (output)
	}
}

export default ListFans;