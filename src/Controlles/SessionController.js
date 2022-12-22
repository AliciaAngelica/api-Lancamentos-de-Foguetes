const User = require('../Models/User')

module.exports = {
    async create(req, res) {
        const { nome, idade } = req.body

        try {
            const userExists = await User.findOne({ nome })
            if (!userExists) return res.status(400).send({ message: 'Usuário não cadastrado!' })

            const validIdade = await User.findOne({ idade })
            if (!validIdade) return res.status(400).send({ message: 'Idade não confirmada!' })
          
            return res.status(200).send(userExists)
    
        } catch (err) {
            return res.status(400).send(err)
        }
    }
}