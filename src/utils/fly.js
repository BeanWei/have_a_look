import Fly from 'flyio'

const fly = new Fly()

// 配置请求基地址
// fly.config.baseURL = 'https://api.ithome.com/'

// 添加请求拦截器
fly.interceptors.request.use((config, promise) => {
  // 给所有请求添加自定义header
  return config
})

// 添加响应拦截器
fly.interceptors.response.use(
  (response, promise) => {
    return promise.resolve(response.data)
  },
  (error, promise) => {
    return promise.resolve(error)
  }
)

export default fly
