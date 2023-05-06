const middleware = (req, res, next) => {
    console.log("middleware is active");
    next(); // calls the next step (render the page)
}

module.exports = middleware;