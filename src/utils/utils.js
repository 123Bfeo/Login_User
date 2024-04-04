const showTemporarily = (setStateFunction) => {
    setTimeout(() => {
        setStateFunction(false);
    }, 5000);
};

export default showTemporarily;
