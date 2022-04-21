import React from 'react'
import './playlistCard.css'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';

interface playlistcard {
    component: string;
    image: string;
    height: string;
    alt: string;
    url: string;
    artistName: string;
    albumName: string;
}

function PlaylistCard (props: playlistcard){

    const card = (
        <React.Fragment>
            <CardContent>
                <CardMedia
                component="img"
                image={props.url}
                height="150"
                alt="">
                </CardMedia>
            </CardContent>
            <CardContent>
                <Typography>
                    {props.artistName}
                </Typography>
                <Typography variant='body2'>
                    {props.albumName}
                </Typography>
            </CardContent>
        </React.Fragment>
    )

    return (
        <div className='playlist-card'>
            <Card 
            style={{backgroundColor: "lightgreen"}} 
            variant="outlined" 
            sx={{ maxWidth: '370' }}
            >
                {card}
            </Card>
        </div>
        
    )
}

export default PlaylistCard