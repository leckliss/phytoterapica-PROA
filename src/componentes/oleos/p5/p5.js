import Style from './p5.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/sabonete-esfoliante.png'
import f2 from '../../imgs/sabonete-lavanda.png'
import f3 from '../../imgs/sabonete-melaleuca.png'
import f4 from '../../imgs/gel-dental-dragon.png'

function Produtos5(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='sabonete esfoliante'
                preco='R$ 19,00'/>
                <Item
                produto={f2}
                oleo='sabonete lavanda'
                preco='R$ 29,00'/>
                <Item
                produto={f3}
                oleo='sabonete melaleuca'
                preco='R$ 39,00'/>
                <Item
                produto={f4}
                oleo=' gel dental dragon'
                preco='R$ 49,00'/>
   
            </div>
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='sabonete esfoliante'
                preco='R$ 19,00'/>
                <Item
                produto={f2}
                oleo='sabonete lavanda'
                preco='R$ 29,00'/>
                <Item
                produto={f3}
                oleo='sabonete melaleuca'
                preco='R$ 39,00'/>
                <Item
                produto={f4}
                oleo=' gel dental dragon'
                preco='R$ 49,00'/>
   
            </div>
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='sabonete esfoliante'
                preco='R$ 19,00'/>
                <Item
                produto={f2}
                oleo='sabonete lavanda'
                preco='R$ 29,00'/>
                <Item
                produto={f3}
                oleo='sabonete melaleuca'
                preco='R$ 39,00'/>
                <Item
                produto={f4}
                oleo=' gel dental dragon'
                preco='R$ 49,00'/>
   
            </div>

        </div>
    )
}

export default Produtos5