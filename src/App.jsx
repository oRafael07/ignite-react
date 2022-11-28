import { Post } from './components/Post'
import { Header } from './components/Header'
import './global.css'

import css from './App.module.css'
import { Sidebar } from './components/Sidebar'

function App() {

  return (
    <div>

      <Header />

      <div className={css.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div >
  )
}

export default App
