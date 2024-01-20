export const Text = (styled: any) =>
    styled('div', {
        width: '100%',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        fontFamily: '$primary',

        variants: {
            responsive: {
                welcome: {
                    text: ['24px', '24px', '40px', '64px'],
                    fontWeight: 700,
                },
                title: {
                    text: ['16px', '20px', '24px'],
                    fontWeight: 700,
                },
                description: {
                    text: ['12px', '12px', '14px', '18px'],
                },
            },
            style: {
                warning: {
                    text: ['14px'],
                    fontWeight: 400,
                    color: '$warning',
                },
                info: {
                    text: ['14px'],
                    fontWeight: 400,
                    color: '$info',
                },
                danger: {
                    text: ['14px'],
                    fontWeight: 400,
                    color: '$danger',
                },
                success: {
                    text: ['14px'],
                    fontWeight: 400,
                    color: '$success',
                },
            },
        },
    });
