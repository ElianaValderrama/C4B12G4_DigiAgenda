const errorHandler = (error, req, res, next) => {
    console.log(error);
    const message = error.message || error.sqlMessage;
    res.status(error.status || 500);
    res.status(500).send(error);
    res.json({message: message || 'Internal server error'})
}

export default errorHandler