import React from 'react';
import '../bootstrap.min.css';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
	const WatchlistComponent = props.watchlistComponent;
	const WatchedComponent = props.watchedComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<>
				
				<div className='image-container justify-content-start col-sm-4'>
					<img src={movie.Poster} alt='movie' width='auto' className=''></img>
                
					{/* <div className='row'>
					<div 
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='overlay align-items-center justify-content-center col-12'>
                        <FavouriteComponent></FavouriteComponent>
                    </div> */}
					{/* <div 
                    onClick={() => props.handleWatchlistClick(movie)}
                    className=' overlay align-items-center justify-content-center col-12'>
                        <WatchlistComponent></WatchlistComponent>
                    </div> */}

					{/* <div 
                    onClick={() => props.handleWatchedClick(movie)}
                    className='overlay align-items-center justify-content-center col-12'>
                        <h2 >Add to watched</h2>
                    </div> */}
					{/* </div> */}
					<div 
                    onClick={() => props.handleFavouritesClick(movie)}
                    className='align-items-center justify-content-center col-12'>
                        <FavouriteComponent></FavouriteComponent>
                    </div>
					<div 
                    onClick={() => props.handleWatchlistClick(movie)}
                    className='align-items-center justify-content-center col-12'>
                        {/* Add to watchlist */}
						<FavouriteComponent></FavouriteComponent>
						{/* <watchlistComponent/> */}
                    </div> 
					<div 
                    onClick={() => props.handleWatchedClick(movie)}
                    className='align-items-center justify-content-center col-12'>
                        {/* Add to watched
						<watchedComponent/> */}
						<FavouriteComponent></FavouriteComponent>
                    </div>
					</div>
				

					</>
			))}
			
		</>
	);
};

export default MovieList;