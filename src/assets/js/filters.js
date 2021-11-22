import MarkdownIt from 'markdown-it'
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

export function cutString(str, len) {
  if (str !== null) {
    let md = new MarkdownIt()
    str = md.render(str)
    str = str.replace(/<.*?>/g, '').replace(/&lt;.*?/g, '<').replace(/&gt;.*?/g, '>').replace(/\s/g, '')
    if (str.length * 2 <= len) {
      return str
    }

    let strlen = 0
    let s = ''
    for (let i = 0; i < str.length; i++) {
      s = s + str.charAt(i)
      if (str.charCodeAt(i) > 128) {
        strlen = strlen + 2
        if (strlen >= len) {
          return s.substring(0, s.length - 1) + '...'
        }
      } else {
        strlen = strlen + 1
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + '...'
        }
      }
    }
    return s
  }
}