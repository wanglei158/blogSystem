var sqlMap = {
  article: {
    queryById: 'select * from articles where id = ?',
    queryAll22: 'SELECT a.*, GROUP_CONCAT(c.id, "_", c.name) AS tag_string FROM articles AS a LEFT JOIN tag_links AS b ON a.id = b.aid LEFT JOIN tags AS c ON b.tid = c.id GROUP BY a.id',
    delById: 'DELETE FROM articles WHERE id = ?',
    updById: 'UPDATE articles SET state=? WHERE id = ?',
    updAllById: 'UPDATE articles SET title=?,summary=?,shtml=? WHERE id = ?',
    queryAll: 'SELECT SQL_CALC_FOUND_ROWS * from articles WHERE state =? order by post_time desc limit ?, ?;SELECT FOUND_ROWS() as count',
    queryAllBysu: 'SELECT SQL_CALC_FOUND_ROWS * from articles WHERE state =? AND username =? order by post_time desc limit ?, ?;SELECT FOUND_ROWS() as count',
    queryAllBySU: 'SELECT * from articles WHERE state =? AND username =?',
    insertComment: 'UPDATE articles SET comments=? WHERE id=?',
    updateViewCount: 'UPDATE articles SET view=?,comment_count=? where id=?',
    insert: 'INSERT INTO articles(username, title,summary,shtml,type, post_time, view, comment_count,state) VALUES (?,?,?,?,?,?,?,?,?)',
    queryByTitle: 'SELECT * FROM articles WHERE title = ?'
  },
  tag: {
    queryById: 'SELECT * FROM articles WHERE id=?',
    queryByName: 'SELECT * FROM tags WHERE name=?',
    queryAll: 'SELECT * FROM tags',
    insert: 'INSERT INTO tags(name) VALUES (?)',
    delById: 'DELETE FROM tags WHERE name = ?',
    updateById: 'UPDATE tags SET name = ? WHERE id = ?'
  },
  comment: {
    insert: 'INSERT INTO comments(article_id, user_id, reply_id, reply_comment_id, content, time) VALUES (?,?,?,?,?,?)',
    queryAll: 'SELECT * FROM comments',
    queryByActicleId: 'SELECT c.id, c.article_id, c.user_id, c.reply_id, c.reply_comment_id, c.content, c.time, v.name as user_name, v.avatar, vi.name as reply_name FROM visitors as v RIGHT JOIN comments as c on c.user_id = v.id LEFT JOIN visitors as vi on c.reply_id = vi.id WHERE c.article_id = ?'
  },
  user: {
    update: 'UPDATE users SET avatar = ? WHERE id = ?',
    queryAll: 'SELECT * FROM users',
    queryUsername: 'SELECT * FROM users WHERE userName = ?',
    insert: 'INSERT INTO users(username,password) VALUES (?,?)'
  },
  visitor: {
    insert: 'INSERT INTO visitors(name, email, website, avatar, reminder) VALUES (?,?,?,?,?)',
    queryByEmail: 'SELECT * FROM visitors WHERE email = ?',
    updByEmail: 'UPDATE visitors SET name = ?, website = ?, avatar = ?, reminder = ? WHERE email = ?'
  }
}

module.exports = sqlMap;
