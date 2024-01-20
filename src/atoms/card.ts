// import { styled } from '../styles';

export const Card = (styled: any) =>
    styled('div', {
        display: 'flex',
        w: '100%',
        bg: '$text',
        color: '$background',
        rounded: '$card',
        justify: 'center',
        boxShadow: '$card',
    });
