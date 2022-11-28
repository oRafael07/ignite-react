import css from './Avatar.module.css'

export function Avatar({ src, hasBorder = true }) {

  return (
    <img className={hasBorder ? css.avatarWithBorder : css.avatar} 
      src={src} alt="" 
    />
  )
}