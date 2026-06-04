import style from './GridComp2.module.css'

function GridComp2() {
  
  return (
    <div className={style.containerX}>
      <div className={style.item}>Item 1</div>
      <div className={style.item}>Item 2</div>
      <div className={style.item}>Item 3</div>
      <div className={style.item}>Item 4</div>
      <div className={`${style.item} ${style.item5}`}>Item 5</div>
      <div className={style.item}>Item 6</div>
      <div className={`${style.item} ${style.item7}`}>Item 7</div>
      <div className={`${style.item} ${style.item8}`}>Item 8</div>
      <div className={style.item}>Item 9</div>
    </div>
  )
}

export default GridComp2


export function GridComp3() {
  
  return (
    <div className={style.containery}>
      <div className={style.itemH}>Header</div>
      <div className={style.itemA1}>Aside 1</div>
      <div className={style.itemM}>Main</div>
      <div className={style.itemA2}>Aside 2</div>
      <div className={style.itemF}>Footer</div>
    </div>
  )
}