export const modalVariantsLeft = {
    hidden: {
        x: '-100vh'
    },
    visible: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.5
        }
    },
    exit: {
        x: '-100vh',
        transition: {
            type: 'easy',
            duration: 0.5,
            delay: 0.5,
        },
    }
};

export const modalVariantsRigth = {
    hidden: {
        x: '100vh'
    },
    visible: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 0.5
        }
    },
    exit: {
        x: '100vh',
        transition: {
            type: 'easy',
            duration: 0.5,
            delay: 0.5,
        },
    }
};