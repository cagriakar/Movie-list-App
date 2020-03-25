import React, {useEffect, useState} from 'react';
import {Fab, Slide, useScrollTrigger} from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {Button} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import MainImage from './Sections/MainImage';
import MovieCard from './Sections/MovieCard';
import {getMovies} from '../../assets/moviecall';
import {API_KEY, API_MAIN_URL, API_IMAGE_URL} from '../../config/Config';

const buttonTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF4081'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
});

function ScrollTop(props) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 650
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#landing-page'
        );
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'start'});
        }
    };

    return (
        <Slide direction='up' in={trigger}>
            <div
                onClick={handleClick}
                style={{position: 'fixed', bottom: '32px', right: '32px'}}
            >
                {props.children}
            </div>
        </Slide>
    );
}

function LandingPage(props) {
    const [movieList, setMovieList] = useState([]);
    const [fetchedPage, setFetchedPage] = useState(1);

    useEffect(() => {
        getMovies(
            `${API_MAIN_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${fetchedPage}`
        )
            .then((response) => {
                setMovieList(response.results);
            })
            .catch((error) => console.log(error));
    }, []);

    useEffect(() => {
        if (fetchedPage !== 1) {
            getMovies(
                `${API_MAIN_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${fetchedPage}`
            )
                .then((response) => {
                    setMovieList((prevMovieList) => {
                        return [...prevMovieList, ...response.results];
                    });
                })
                .catch((error) => console.log(error));
        }
    }, [fetchedPage]);

    const handleClick = () => {
        setFetchedPage(fetchedPage + 1);
    };

    return (
        <div className='Landing-Page' id='landing-page'>
            {movieList[3] && (
                <div className='container w-90 p-0 mt-2 mb-3'>
                    <MainImage
                        className='main-image px-0'
                        movies={movieList.slice(0, 3)}
                    ></MainImage>
                </div>
            )}
            <div>
                <h2>Movies sorted by default </h2>
                <div className='container w-90'>
                    <hr></hr>
                </div>

                <div className='container w-85'>
                    <div className='row container mx-0'>
                        {movieList.map((movie) => (
                            <div className='movie-card col-sm-6 col-md-4 col-lg-3'>
                                <MovieCard
                                    image={`${API_IMAGE_URL}w500${movie.poster_path}`}
                                    title={movie.title}
                                    release={movie.release_date.slice(0, 4)}
                                    text={movie.overview}
                                    movieId={movie.id}
                                    key={movie.id}
                                ></MovieCard>
                            </div>
                        ))}
                    </div>
                </div>
                <ScrollTop {...props}>
                    <Fab
                        aria-label='Home'
                        className='home-button'
                        color='secondary'
                    >
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
                <ThemeProvider theme={buttonTheme}>
                    <Button
                        style={{marginTop: '1.5rem'}}
                        variant='contained'
                        color='primary'
                        size='small'
                        onClick={handleClick}
                    >
                        Bring me More Movie
                    </Button>
                </ThemeProvider>
            </div>
        </div>
    );
}

export default LandingPage;
