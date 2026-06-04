import style from "./FloatAndClear.module.css"


export const FloatAndClear = () => {
    return <>
        <div className={style.box1}></div>
        <div className={style.box2}></div>
        <div className={style.box3}></div>
        <p className={style.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis? Recusandae eos, quo fuga sapiente est nemo error provident dolores modi iure autem placeat laudantium tempore neque consequatur? Quam, dicta. ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis? Recusandae eos, quo fuga sapiente est nemo error provident dolores modi iure autem placeat laudantium tempore neque consequatur? Quam, dicta ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis? Recusandae eos, quo fuga sapiente est nemo error provident dolores modi iure autem placeat laudantium tempore neque consequatur? Quam, dicta.</p>
    </>
}
// https://youtu.be/LrdkRMZhgZg?si=4Wyy4QglUuGUbP-y (see from 14 min for clear)

export const FloatAndClearExTwo = () => {
    return <>
        <div className={style.boxex1}></div>
        <div className={style.boxex1}></div>
        <div className={style.boxex1}></div>
        <div className={style.boxex2}></div>
        <div className={style.boxex3}></div>
    </>
}

export const FloatAndClearExThree = () => {
    return <>
        <span className={style.spanContainer1}>aa</span>
        <span className={style.spanContainer2}>bb</span>
        
    </>
}