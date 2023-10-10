import Styles from "./header.module.css";
import caminhao from "../../img/header/icon-caminhao.png"
import desconto from "../../img/header/desconto.png"
import pessoa from "../../img/header/pessoa.png"
import cart from "../../img/header/cart.png"


export default function Header() {

    return (
        <header>
            <div className={Styles.frete}>
                <img className={Styles.caminhaofrete} src={caminhao} alt="caminhao-icon" />
                <p>Com mais R$ 200,00 o frete é por nossa conta!</p>
            </div>

            <div className={Styles.menu}>
                
                <div className={Styles.headerlogo}>
                </div>

                <div className={Styles.menu2}>
                <input type="text" className={Styles.buscar} placeholder="O que você procura?" />

                <div className={Styles.desconto} >
                    <p>-5% na primeira compra </p>
                    <img src={desconto} alt="desconto-icon" />
                </div>

                    <img src={pessoa} alt="pessoa-icon" className={Styles.perfil} />
                    <img src={cart} alt="carrinho-icon" className={Styles.perfil} />
                </div>

                <div className={Styles.headermenu}></div>
            </div>


        </header>
    );
}