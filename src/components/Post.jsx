import { Avatar } from './Avatar';
import { Comment } from './Comment';
import css from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Fragment, useState } from 'react';

export function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState(['Post muito bom!']);

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH'h'mm", {
    locale: ptBR
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
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
        {content.map((item) => {
          if (item.type === 'paragraph') {
            return <Fragment key={item.content}>
              <p>{item.content}</p>
            </Fragment>
          } else if (item.type === 'link') {
            return <Fragment key={item.content}>
              <p><a href="#">{item.content}</a></p>
            </Fragment>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={css.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={handleNewCommentChange}
          value={newCommentText}
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={css.commentList}>
        {comments.map((comment) => {
          return <Fragment key={comment}>
            <Comment content={comment} />
          </Fragment>
        })}
      </div>
    </article>
  )
}