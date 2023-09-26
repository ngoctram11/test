const userModel = [
    {
        id: 1,
        name: 'John Doe',
        email: '',
        username: 'john.doe',
        password: '',
        role: 'admin'
    },
]

const listUser = (req, res) => {
    return res.render('layout', { title: 'List user', page:'ListUser' });
}

const getDetailUser = (req, res) => {
    const username = req.params.username;
    return res.render('layout', { title: 'Detail user', page:'DetailUser' , user: username});
}

const createNewUser = (req, res) => {
    return res.render('layout', { title: 'Create new user', page:'CreateUser' });
}

export default {
    listUser,
    getDetailUser,
    createNewUser
}
