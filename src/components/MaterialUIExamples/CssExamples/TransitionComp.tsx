import style from "./TransitionComp.module.css"

function TransitionComp() {

  return <>
        <div className={style.box}>TransitionComp</div>
        <br /><br />
        <div className={style.boxAnimation}>Animation</div>
        <br /><br />
        <div className={style.boxAnimation2}>Animation 2</div>
        <br /><br />
        <div className={style.boxAnimation3}>Animation 3</div>


        <br /><br />
        <div className={style.transition2}>Transition 2</div>
        <br /><br />
        <div className={style.parentAnimation}>
          <div className={style.boxAnimation4}>Animation 4</div>
        </div>
    </>
}

export default TransitionComp