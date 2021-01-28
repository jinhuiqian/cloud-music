// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env: 'jinhuiqian-8gi1cox44dde5a5a'
})

//引入路由
const TcbRouter = require('tcb-router')
const axios = require('axios')
//定义基础URL，修改自己的穿透地址
const BASE_URL = 'http://cloud-music.cn1.utools.club'

// 云函数入口函数
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  })

  //歌单列表请求，需要传入url，起始记录索引，请求的记录数，按照创建时间降序排列
  app.router('playlist', async (ctx, next) => {
    ctx.body = await cloud.database().collection('playlist')
    .skip(event.start)
    .limit(event.count)
    .orderBy('createTime','desc')
    .get()
    .then((res) => {
      return res
    })
  })
  return app.serve()
  }
