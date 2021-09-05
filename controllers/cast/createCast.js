const { Cast, MovieCast, sequelize } = require('../../models')

module.exports = async (req,res,next) => {
    let t;

    try {

        t = await sequelize.transaction()

        const payload = {
            name: req.body.name,
            birthday: req.body.birthday,
            deadday: req.body.deadday,
            rating: req.body.rating
        }

        const movie_id = req.body.movie_id 
        
        const cast = await Cast.create(payload,{
            transaction: t
        })

        await MovieCast.create({
            movie_id,
            cast_id: cast.id
        },
            {
                transaction: t
            }
        )

        await t.commit()

        res.status(201).json({
            cast
        })
    } catch (err) {
        if(err) await t.rollback()

        next(err)
    }
}