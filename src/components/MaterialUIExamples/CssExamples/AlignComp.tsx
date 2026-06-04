import style from "./Align.module.css"

export const AlignComp = () => {
    return <>
        <span className={style.alignStyle}>aaaaaaa</span>
        <p className={style.justify}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, perspiciatis? Recusandae eos, quo fuga sapiente est nemo error provident dolores modi iure autem placeat laudantium tempore neque consequatur? Quam, dicta.</p>
    </>
}

export const InlineComp = () => {
    return <>
        <p className={style.para}>ccccc</p>
        <p className={style.para}>dddd</p>
        <span className={style.spanConatiner}>aaaaaaa</span>
        <span className={style.spanConatiner}>bbbbbbb</span>
        {/* margin-top and bottom for inline don't work, but for inline-block it work. 
        all sides padding work for both inlne and inline-block */}
    </>
}

export const WidthInInlineComp = () => {
    return <>
        <p className={style.parawidth}>Darshan</p>
        <span className={style.parawidth}>bbbbbbs</span>
        <span className={style.spaninlineBlockWidth}>ccccccs</span>
        <p className={style.parainlineBlockWidth}>ddddddds</p>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error accusamus assumenda soluta possimus, mollitia placeat sed laborum quod vel rem, nemo sit non quam reiciendis pariatur nostrum, cum incidunt? Voluptatibus!</h6>
        {/* Width and height won't for inline elements, but it work for inline block elements
        vertial align generally used for inlie elements to align content 
        vertial align defination from MDN docs - The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.*/}
    </>
}