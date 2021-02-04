// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'jinhuiqian-8gi1cox44dde5a5a'
})

// 云函数入口函数
exports.main = async (event, context) => {
    const res = await axios.get(`${BASE_URL}/playlist/detail?id=${parseInt(event.playlistId)}`)
    event.body = res.data
}