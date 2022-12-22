const User = require('../Models/User')


module.exports = {
    async create(req, res) {

        const { nome, idade } = req.body


        try {

            const userAlreadyExists = await User.findOne({ nome })
            if (userAlreadyExists) return res.status(400).send({ message: 'Usuário já cadastrado' })

            const createdUser = await User.create({
                nome,
                idade,
            })
            return res.status(201).send(createdUser)

        } catch (err) {
            return res.status(400).send(err)
        }
    },


    async index(req, res) {

        try {

            const allUsers = await User.find()

            return res.status(200).send(allUsers)

        } catch (err) {
            return res.status(400).send(err)
        }
    },

}