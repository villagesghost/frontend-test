import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

interface ICard {
    imgUrl: string;
    title: string;
    checked: boolean;
}

interface CardsProps {
    items?: ICard[];
}

export const Cards = ({ items }: CardsProps) => {
    return (
        <Grid justifyContent="center" container direction="row" alignItems="center" spacing={4}>
            {items?.map((o, i) => (
                <Grid item key={i}>
                    <Card sx={{ maxWidth: 450 }} className="shadow-lg">
                        <CardMedia
                            component="img"
                            height="140"
                            image={o?.imgUrl}
                            alt="green iguana"
                        />
                        <CardContent>
                            <FormControlLabel
                                control={<Checkbox defaultChecked={o?.checked} />}
                                label={o?.title}
                                classes={{
                                    root: 'py-0'
                                }}
                            />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}