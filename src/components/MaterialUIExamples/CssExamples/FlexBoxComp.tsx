import style from "./FlexBoxComp.module.css"

export const FlexBoxComp = () => {

    return <>
    <div className={style.flexbox}>
        <span>item 1</span>
        <span>item 2</span>
        <span>item 3</span>
        <span>item 4</span>
        <span>item 5</span>

        <span>item 6</span>
        <span>item 7</span>
        <span>item 8</span>
        <span>item 9</span>
        <span>item 10</span>

        <span>item 11</span>
        <span>item 12</span>
        
    </div>
    <br />
    <div className={style.flexboxabc}>
        <span>item 1</span>
        <span>item 2</span>
        <span>item 3</span>
        <span>item 4</span>
        <span>item 5</span>

        <span>item 6</span>
        <span>item 7</span>
        <span>item 8</span>
        <span>item 9</span>
        <span>item 10</span>

        <span>item 11</span>
        <span>item 12</span>
        
    </div>
    </>
}


export const FlexBoxComp2 = () => {

    return <div className={style.flexBox2}>
        <span>Home</span>
        <span>About</span>
        <span>Contact Us</span>
        <span>Profile</span>
    </div>
}

export const FlexLayoutDesign = () => {

    return <div className={style.body}>
        <header>
            Header
        </header>
        <main>
            <aside>
                Aside 1
            </aside>
            <article>
                This is where main content goes
            </article>
            <aside>
                Aside 2
            </aside>
        </main>
        <footer>
            Footer
        </footer>
    </div>
}

export const FlexLayoutDesign2 = () => {

    return <div className={style.FlexLayoutDesign2}>
        <header>
            Header
        </header>
        <div className={style.content}>
            <article>
                Article
            </article>
            <div className={style.section}>
                <section>
                    Section
                </section>
                <section>
                    Section
                </section>
            </div>
        </div>
        <main>
            Main
        </main>
        <footer>
            Footer
        </footer>
    </div>
}