import style from "./TransformComp.module.css"

function TransformComp() {

  return <>
      <div className={style.translate}>TransformComp</div>
      <div className={style.rotate}>TransformComp</div>
      <div className={style.scale}>TransformComp</div>
      <div className={style.skew}>TransformComp</div>
      <div className={style.rotate3d}>Transform 3d</div>
    </>
    // The matrix() method combines all the 2D transform methods into one.
    // The matrix() method take six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements.
    // The parameters are as follow: matrix(scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY())
}

export default TransformComp



export const TransformComp2 = () => {

  return <>
    <div className={style.translate2}>Translate 2</div>
    <div className={style.rotate2}>Rotate comp</div>
    <div className={style.skew2}>Skew comp</div>
  </>
}