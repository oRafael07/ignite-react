import { Avatar } from './Avatar';
import { Comment } from './Comment';
import css from './Post.module.css';

export function Post() {
  return (
    <article className={css.post}>
      <header>
        <div className={css.author}>
          <Avatar src="https://github.com/oRafael07.png" />
          <div className={css.authorInfo}>
            <strong>Rafael</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={css.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p>
          <a href="#">#novoprojeto</a>{' '}
          <a href="#">#nlw</a>{' '}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={css.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={css.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}