import { ThumbsUp, Trash } from 'phosphor-react'
import { memo } from 'react'
import { Avatar } from './Avatar'
import css from './Comment.module.css'

export function Comment({ content }) {
  return (
    <div className={css.comment}>
      <Avatar hasBorder={false} src="https://github.com/oRafael07.png" alt="" />

      <div className={css.commentBox}>
        <div className={css.commentContent}>
          <header>
            <div className={css.authorAndTime}>
              <strong>Rafael</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}