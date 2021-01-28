const cloud = require('wx-server-sdk')

cloud.init({
  env: 'jinhuiqian-8gi1cox44dde5a5a'
})

const db = cloud.database()

const recommendsongsCollection = db.collection('recommendsongs')

const axios = require('axios')

const URL = 'http://cloud-music.cn1.utools.club/recommend/songs'

// 云函数入口函数
exports.main = async (event, context) => {
  //使用axios发送异步get请求，并把结果赋值给data变量
  const {
    data
  } = await axios.get(URL)
  console.log('######' + JSON.stringify(data))

  if(data.code >= 1000) {
    console.log(data.msg)
    return 0
  }
  const recommendsongs = data.recommendsongs

  const newData = []

  for (let i = 0, len = recommendsongs.length; i < len; i++) {

    let pl = recommendsongs[i]

    pl.createTime = db.serverDate()

    newData.push(pl)
  }
  console.log(newData)

  if (newData.length > 0) {

    await recommendsongsCollection.add({
      data: [...newData]
    }).then((res) => {
      console.log('插入成功')
    }).catch((err) => {
      console.log(err)
      console.error('插入失败')
    })
  }
  return newData.length
}

