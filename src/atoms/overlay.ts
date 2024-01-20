export const Overlay = (styled: any) =>
    styled('div', {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100dvw',
        height: '100dvh',
        display: 'flex',
        justify: 'center',
        items: 'center',
        backdropFilter: '$blur-sm',
        zIndex: 999,
        color: 'white',
    });

export const OverlayInteract = (styled: any) =>
    styled('div', {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: -1,
    });
