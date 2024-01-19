import { styled } from '../styles';

export const Input = styled('input', {
    boxShadow: 'none',
    borderStyle: 'none',
    border: '1px solid',
    textColor: '#666666',
    background: 'white',
    p: ['12px 16px'],
    h: '100%',
    w: '100%',
    text: ['16px'],
    rounded: '10px',
    '&::placeholder': {
        textColor: '#666666',
    },
    '&:hover': {
        outline: 'none',
    },
});
