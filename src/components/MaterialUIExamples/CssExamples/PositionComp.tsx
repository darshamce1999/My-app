import style from "./Position.module.css"

export function PositionComp() {
    return <div className={style.parentRelative}>
        <p>para 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dignissimos totam odio atque tempore architecto laboriosam ex ut quas quo dolores enim ad eveniet at nemo reprehenderit? Modi, facere quas!</p>
        <p className={style.relative}>para 2 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. !</p>
        <p>para 4 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta provident similique quod enim minima sed delectus, voluptates tempore asperiores corrupti quia esse ullam assumenda odit ex. Exercitationem, dolores laboriosam!</p>
        <p className={style.absolute}>para 5 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta provident similique quod enim minima sed delectus, voluptates tempore</p>
        <p>para 6 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta provident similique quod enim minima sed delectus, voluptates tempore asperiores corrupti quia esse ullam assumenda odit ex. Exercitationem, dolores laboriosam!</p>
        <p className={style.fixed}>para 7 it will take only till its content, same for "absolute"</p>
        <p>para 8 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta provident similique quod enim minima sed delectus, voluptates tempore asperiores corrupti quia esse ullam assumenda odit ex. Exercitationem, dolores laboriosam!</p>
        <p className={style.sticky}>para 9 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta provident similique quod enim minima sed delectus dolores laboriosam!</p>
        <p>para 10 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta provident similique quod enim minima sed delectus, voluptates tempore asperiores corrupti quia esse ullam assumenda odit ex. Exercitationem, dolores laboriosam!</p>
        <p>para 11 Dahh hh Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta provident similique quod enim minima sed delectus, voluptates tempore asperiores corrupti quia esse ullam assumenda odit ex. Exercitationem, dolores laboriosam!</p>
        <p>para 12 Dahh hh Lorem <br />ipsum dolor sit amet <br />consectetur adipisicing elit.<br /> Tenetur dicta provident <br />similique quod enim<br /> minima sed del<br />ectus, voluptates tempore asperiores<br /> corrupti quia esse ul<br />lam assumenda odit ex. <br />Exercitationem, dolores<br /> laboriosam!</p>
        <p>para 13 Dahh hh Lorem <br />ipsum dolor sit amet <br />consectetur adipisicing elit.<br /> Tenetur dicta provident <br />similique quod enim<br /> minima sed del<br />ectus, voluptates tempore asperiores<br /> corrupti quia esse ul<br />lam assumenda odit ex. <br />Exercitationem, dolores<br /> laboriosam!</p>
    </div>
}