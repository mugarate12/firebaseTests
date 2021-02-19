import { db } from './../../../config/firebase'

export default async function createAnything(req, res) {
  return await db.collection('anything').doc()
    .set({
      any: 'anything information'
    })
      .then(result => {
        return res.status(200).json({
          sucess: 'criado com sucesso!'
        })
      })
      .catch(error => {
        return res.status(406).json({
          error: {
            name: error.code,
            message: error.message
          }
        })
      })
}