import React from 'react'
import style from "./FlexBox.module.css"

function FlexBox() {
  return (
    <div className={style.flex}>
        <header className={style.header}>Header</header>
        <div className={style.content}>
            <aside className={style.aside}>Aside 1</aside>
            <main className={style.main}>Main</main>
            <aside className={style.aside}>Aside 2</aside>
        </div>
        <footer className={style.footer}>Footer</footer>
    </div>
  )
}

export default FlexBox