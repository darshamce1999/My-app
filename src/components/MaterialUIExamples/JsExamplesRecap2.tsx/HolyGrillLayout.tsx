import React from 'react'
import style from "./HolyGrill.module.css"

function HolyGrillLayout() {
  return (
    <div className={style.container}>
        <header className={style.head}>Header</header>
        <main className={style.main}>
            <aside className={style.aside}>
                Aside 1
            </aside>
            <section className={style.section}>
                Section
            </section>
             <aside className={style.aside}>
                Aside 2
            </aside>
        </main>
        <footer className={style.footer}>Footer</footer>
    </div>
  )
}

export default HolyGrillLayout