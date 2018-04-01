function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  date = new Date(date)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function formatSlideList (slide) {
  const title = slide.title['#text']
  const image = slide.image['#text']
  const link = slide.link['#text']
  return {
    title,
    image,
    link: encodeURI(`/pages/news/detail?id=${link}&title=${title}`)
  }
}

export function formatNewsList (news) {
  const { post, image } = news
  return {
    id: post.id,
    title: post.title,
    postdate: formatTime(post.publish_time),
    commentcount: post.comment_count,
    praise_count: post.praise_count,
    image: image,
    link: encodeURI(`https://www.qdaily.com/articles/${post.id}.html`)
  }
}

export function formatMeiziList (meizi) {
  const { url } = meizi
  return {
    url: url
  }
}

export function formatComment (comment) {
  return {
    id: comment.M.Ci,
    author: comment.M.N,
    phone: comment.M.Ta,
    floor: comment.M.SF || `${comment.F}楼`,
    content: comment.M.C.replace(/<img/g, '<img width="100%"')
  }
}
