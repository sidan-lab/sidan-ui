export const Box = (styled: any) =>
    styled('div', {
        display: 'flex',
        width: '100%',
        wordWrap: 'break-word',
        items: 'center',
    });

export const HBox = (styled: any) =>
    styled(Box, {
        variants: {
            direction: {
                rowReverse: {
                    flexDirection: 'row-reverse',
                },
            },
        },
    });

export const VBox = (styled: any) =>
    styled(Box, {
        flexDirection: 'column',
        variants: {
            direction: {
                columnReverse: {
                    flexDirection: 'column-reverse',
                },
            },
        },
    });

export const FormBox = (styled: any) =>
    styled('form', {
        display: 'flex',
        w: '100%',
        wordWrap: 'break-word',
        items: 'center',
        flexDirection: 'column',
    });
