const Foguete = require('../Models/Foguete')


module.exports = {
    async create(req, res) {

        const { porcentagem_lucro, data_lancamento } = req.body

        try {

            const createdDataLucro = await Foguete.create({
                porcentagem_lucro,
                data_lancamento,
            })
            return res.status(201).send(createdDataLucro)

        } catch (err) {
            return res.status(400).send(err)
        }
    },
}