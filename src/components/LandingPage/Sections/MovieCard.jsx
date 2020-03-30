import React, {Component} from 'react';

import {FavoriteRounded} from '@material-ui/icons';
import {FavoriteBorderRounded} from '@material-ui/icons';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Reward from 'react-rewards';

const buttonTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#FF4081'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2
    }
});

function MovieCard(props) {
    class Favorite extends Component {
        state = {
            isFavorite: false
        };

        handleClick() {
            this.state.isFavorite
                ? this.reward.punishMe()
                : this.reward.rewardMe();
            this.setState({isFavorite: !this.state.isFavorite});
        }

        render() {
            return (
                <ThemeProvider theme={buttonTheme}>
                    <Reward
                        ref={(ref) => {
                            this.reward = ref;
                        }}
                        type='emoji'
                        config={{
                            elementSize: 15,
                            elementCount: 20,
                            emoji: ['💕', '💖']
                        }}
                    >
                        {this.state.isFavorite ? (
                            <FavoriteRounded
                                fontSize='small'
                                onClick={() => this.handleClick()}
                                color='primary'
                            ></FavoriteRounded>
                        ) : (
                            <FavoriteBorderRounded
                                fontSize='small'
                                onClick={() => this.handleClick()}
                                color='primary'
                            ></FavoriteBorderRounded>
                        )}
                    </Reward>
                </ThemeProvider>
            );
        }
    }

    return (
        <div className='card'>
            <img src={props.image} className='card-img-top' alt={props.title} />
            <div className='card-body'>
                <p className='card-text mb-2'>
                    <small className='text-muted'>
                        {props.title} ({props.release})
                    </small>
                </p>
                <Favorite></Favorite>
            </div>
        </div>
    );
}

export default MovieCard;
