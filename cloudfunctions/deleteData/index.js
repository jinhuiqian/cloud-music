const cloud = require('wx-server-sdk')

cloud.init({
  env: 'jinhuiqian-8gi1cox44dde5a5a'
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('playlist').where({
      id: _.exists(true)
    }).remove()
  } catch(e) {
    console.error(e)
  }
}