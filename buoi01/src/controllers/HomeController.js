const HomeController = (req, res) => {
    res.render('layout', { title: 'Home', page:'Home' });
}

export default HomeController;
