import style from './Grid.module.css'

export const GridComp = () => {
    return <><div className={style.gridContainer}>
        <div className={`${style.item} ${style.item1}`}>item 1</div>
        <div className={style.item}>item 2</div>
        <div className={`${style.item} ${style.item3}`}>item 3</div>
        <div className={style.item}>item 4</div>
        <div className={style.item}>item 5</div>
        <div className={style.item}>item 6</div>
        <div className={style.item}>item 7</div>
        <div className={style.item}>item 8</div>
        <div className={style.item}>item 9</div>
    </div>
    <br /><br />
    <div className={style.mainContainer}>
        <div className={style.itema}>item 1</div>
        <div className={style.itemb}>item 2</div>
        <div className={style.itemc}>item 3</div>
        <div className={style.itemd}>item 4</div>
    </div>
    </>
}


export const GridComp2 = () => {

    return <div className={style.GridComp2}>
        <div className={`${style.itemx} ${style.itemx}`}>item 1</div>
        <div className={style.itemx}>item 2</div>
        <div className={`${style.itemx} ${style.itemx}`}>item 3</div>
        <div className={style.itemx}>item 4</div>
        <div className={style.itemx}>item 5</div>
        <div className={style.itemx}>item 6</div>
        <div className={style.itemx}>item 7</div>
        <div className={style.itemx}>item 8</div>
        <div className={style.itemx}>item 9</div>
    </div>
}


export const GridComp4 = () => {

    return (
    <>
    <div className={style.GridComp4}>
        <div className={style.item4}>item 1</div>
        <div className={style.item4}>item 2</div>
        <div className={style.item4}>item 3</div>
        <div className={style.item4}>item 4</div>
        <div className={style.item4}>item 5</div>
        <div className={style.item4}>item 6</div>
        <div className={style.item4}>item 7</div>
        <div className={style.item4}>item 8</div>
        <div className={style.item4}>item 9</div>
    </div>
    </>)
}

export const GridComp5 = () => {

    return (
    <>
    <div className={style.GridComp5}>
        <header>
            Header
        </header>
        <aside>
            Side bar
        </aside>
        <div className={style.content1}>
            Content 1
        </div>
        <div className={style.content2}>
            Content 2
        </div>
        <div className={style.content3}>
            Content 3
        </div>
        <footer>
            Footer
        </footer>
    </div>
    </>)
}