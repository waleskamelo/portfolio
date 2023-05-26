import photo1 from "./assets/img/01.jpg"
import photo2 from "./assets/img/02.jpg"
import photo3 from "./assets/img/03.jpg"
import photo4 from "./assets/img/04.jpg"
import photo5 from "./assets/img/05.jpg"
import photo6 from "./assets/img/06.jpg"
import './index.css'

const Photography = () => {
    return (
        <>
            <main className="quadrante">
                <section className="galeria">
                    <figure className="itemGaleria item01">
                        <img className="imgGaleria" src={photo1} alt="Imagem 01" />
                    </figure>

                    <figure className="itemGaleria item02">
                        <img className="imgGaleria" src={photo2} alt="Imagem 02" />
                    </figure>

                    <figure className="itemGaleria item03">
                        <img className="imgGaleria" src={photo3} alt="Imagem 03" />
                    </figure>

                    <figure className="itemGaleria item04">
                        <img className="imgGaleria" src={photo4} alt="Imagem 04" />
                    </figure>

                    <figure className="iemGaleria item05">
                        <img className="imgGaleria" src={photo5} alt="Imagem 05" />
                    </figure>

                    <figure className="itemGaleria item06">
                        <img className="imgGaleria" src={photo6} alt="Imagem 06" />
                    </figure>
                </section>
            </main>
        </>
    )
}

export default Photography