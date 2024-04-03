export const containerMotion = {
    hidden: {
        opacity: 0, // corrected typo 'opacitiy' to 'opacity'
    },
    visible: {
        opacity: 1, // corrected typo 'opacitiy' to 'opacity'
        transition: { delay: 0.6, duration: 0.9 }
    },
    exit: {
        opacity: 0, // corrected typo 'opacitiy' to 'opacity'
        transition: { ease : 'easeInOut' }
    }
};

export const modalContainer = {
    hidden: {
        opacity: 1, // corrected typo 'opacitiy' to 'opacity'
        y : '-100vh'
    },
    visible: {
        opacity: 1, // corrected typo 'opacitiy' to 'opacity'
        y: '0',
        transition: { delay: 0.3, duration: 0.3 }
    },
    exit: {
        y : '100vh', // corrected typo 'opacitiy' to 'opacity'
        transition: { delay: 0.3, duration: 0.3 }
    }
};
