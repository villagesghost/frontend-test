import React from 'react';
import { Card, CardContent, CardMedia, FormControlLabel, Checkbox, Typography } from '@mui/material';

interface IBoxInfoProps {
    image: string;
    imagePosition: 'top' | 'right' | 'bottom' | 'left' | 'behind';
    title: string;
    checked: boolean;
    description: string;
    align: 'left' | 'center' | 'right';
    vertical: 'top' | 'center' | 'bottom';
}

export const BoxInfo = (props: IBoxInfoProps) => {
    const { image, title, description, checked, align, vertical, imagePosition } = props;
    const cardClass = ['shadow-lg', 'w-full', 'relative'];
    let cardMediaClass: string[] = [];
    let cardContentClass: string[] = [];

    switch (imagePosition) {
        case 'behind':
            cardMediaClass = ['relative z-10']
            cardContentClass = ['absolute z-20']

            if (vertical == 'top') {
                cardContentClass.push('top-0')
            } else if (vertical == 'bottom') {
                cardContentClass.push('bottom-0')
            } else {
                cardContentClass.push('top-1/2 transform -translate-y-1/2')
            }

            if (align == 'right') {
                cardContentClass.push('right-0')
            } else if (align == 'left') {
                cardContentClass.push('left-0')
            } else {
                cardContentClass.push('left-1/2 transform -translate-x-1/2')
            }
            break;

        case 'left':
            cardClass.push('flex flex-row')
            cardMediaClass.push('order-2')
            cardContentClass.push('order-5')
            break;

        case 'right':
            cardClass.push('flex flex-row')
            cardMediaClass.push('order-5')
            cardContentClass.push('order-2')
            break;

        case 'bottom':
            cardClass.push('flex flex-col')

            if (vertical == 'bottom') {
                cardMediaClass.push('order-5')
                cardContentClass.push('order-2')
            }
            break;

        default:
            break;
    }

    return (
        <Card className={cardClass.join(' ')}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="green iguana"
                className={cardMediaClass.join(' ')}
            />
            <CardContent className={cardContentClass.join(' ')}>
                <Typography gutterBottom variant="h5" component="div">
                    <FormControlLabel control={<Checkbox checked={checked} />} label={title} />
                </Typography>
                <Typography variant="body2">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}