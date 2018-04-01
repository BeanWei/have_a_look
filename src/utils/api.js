import fly from './fly'

const api = {
  getSlides () {
    return fly.get('https://api.ithome.com/xml/slide/slide.xml')
  },

  getNewsList () {
    return fly.get('https://www.qdaily.com/tags/tagmore/1068/0.json')
  },

  getMeiziList () {
    return fly.get(`http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1`)
  }
}

export default api
