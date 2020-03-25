import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';

import {API_IMAGE_URL} from '../../../config/Config';

function MainImage(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    console.log(props);
    return (
        <Carousel fade='true' activeIndex={index} onSelect={handleSelect}>
            {props.movies.map((movie) => (
                <Carousel.Item key={movie.id}>
                    <img
                        className='d-block w-100'
                        src={`${API_IMAGE_URL}w1280${movie.backdrop_path}`}
                        alt={`${movie.title}`}
                    />
                    <Carousel.Caption className='caption'>
                        <h5>{movie.title}</h5>
                        <p className='d-none d-md-block'>{movie.overview}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default MainImage;
