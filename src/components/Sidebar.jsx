import css from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={css.sidebar}>
      <img className={css.cover} src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />

      <div className={css.profile}>

        <img className={css.avatar} src="https://github.com/oRafael07.png" alt="" />

        <strong>Rafael</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}