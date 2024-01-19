export const Text = (styled: any) =>
    styled('div', {
        my: 'auto',
        textAlign: 'center',
        whiteSpace: 'nowrap',

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
                    color: '#FF9800',
                },
                info: {
                    text: ['14px'],
                    fontWeight: 400,
                    color: '#2196F3',
                },
                danger: {
                    text: ['14px'],
                    fontWeight: 400,
                    color: '#F44336',
                },
                success: {
                    text: ['14px'],
                    fontWeight: 400,
                    color: '#04AA6D',
                },
            },
        },
    });
