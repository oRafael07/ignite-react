import { Post } from './Post'
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
          <Post
            author="Rafael"
            content="Hello World"
          />
          <Post
            author="John Doe"
            content="NEW Post"
          />
        </main>
      </div>
    </div >
  )
}

export default App
