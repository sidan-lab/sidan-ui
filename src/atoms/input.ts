export const Input = (styled: any) =>
    styled('input', {
        boxShadow: 'none',
        borderStyle: 'none',
        border: '1px solid',
        textColor: '$backgroundLight',
        bg: '$text',
        p: ['12px 16px'],
        h: '100%',
        w: '100%',
        text: ['16px'],
        rounded: '10px',
        '&::placeholder': {
            textColor: '$backgroundLight',
        },
        '&:hover': {
            outline: 'none',
        },
    });
