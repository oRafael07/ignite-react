import { Avatar } from './Avatar';
import { Comment } from './Comment';
import css from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Fragment, useState } from 'react';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState([1, 2])

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, comments.length + 1])
  }

  return (
    <article className={css.post}>
      <header>
        <div className={css.author}>
          <Avatar src={author.avatarUrl} />
          <div className={css.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={css.content}>
        {content.map((item, index) => {
          if (item.type === 'paragraph') {
            return <Fragment key={index}>
              <p>{item.content}</p>
            </Fragment>
          } else if (item.type === 'link') {
            return <Fragment key={index}>
              <p><a href="#">{item.content}</a></p>
            </Fragment>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={css.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={css.commentList}>
        {comments.map((comment, index) => {
          return <Fragment key={index}>
            <Comment />
          </Fragment>
        })}
      </div>
    </article>
  )
}