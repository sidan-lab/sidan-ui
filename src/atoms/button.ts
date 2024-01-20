export const Button = (styled: any) =>
    styled('button', {
        display: 'flex',
        pos: 'relative',
        p: ['8px 20px'],
        bg: '$primary',
        rounded: '$button',
        fontFamily: '$text',
        justifyContent: 'center',
        cursor: 'pointer',
        borderStyle: 'none',
        '&:hover': {
            boxShadow: '$lg',
            opacity: '$hover',
        },
        variants: {
            style: {
                primary: {
                    color: '$text',
                    bg: '$primary',
                },
                'gradient-primary': {
                    color: '$white',
                    gradient: '$gradient-primary-button',
                },
                secondary: {
                    color: '$text',
                    gradient: '$secondary',
                },
            },
            size: {
                sm: {
                    p: ['6px 10px'],
                },
                md: {
                    p: ['8px 20px'],
                },
                lg: {
                    p: ['15px 25px'],
                },
            },
        },
    });

export const ButtonWrapper = (styled: any) =>
    styled('div', {
        display: 'flex',
        justify: 'center',
        alignItems: 'center',
        width: 'fit-content',
        gapX: ['8px'],
        gapY: ['8px'],
        cursor: 'pointer',
        color: '$text',
        '&:hover': {
            opacity: '$hover',
        },
    });
