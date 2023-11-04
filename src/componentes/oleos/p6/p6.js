import Style from './p6.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/aromatizador-cuia.png'
import f2 from '../../imgs/aromatizador-tulipa.png'
import f3 from '../../imgs/colar-arvoredavida.png'
import f4 from '../../imgs/colar-mandala.png'

function Produtos6(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='aromatizador cuia'
                preco='R$29,00'/>
                <Item
                produto={f2}
                oleo=' aromatizador tulipa'
                preco='R$ 19,00'/>
                <Item
               produto={f3}
                oleo=' arvore da vida'
                preco='R$ 69,00'/>
                <Item
                produto={f4}
                oleo='colar mandala'
                preco='R$ 79,00'/>
   
            </div>
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='aromatizador cuia'
                preco='R$29,00'/>
                <Item
                produto={f2}
                oleo=' aromatizador tulipa'
                preco='R$ 19,00'/>
                <Item
               produto={f3}
                oleo=' arvore da vida'
                preco='R$ 69,00'/>
                <Item
                produto={f4}
                oleo='colar mandala'
                preco='R$ 79,00'/>
   
            </div>
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='aromatizador cuia'
                preco='R$29,00'/>
                <Item
                produto={f2}
                oleo=' aromatizador tulipa'
                preco='R$ 19,00'/>
                <Item
               produto={f3}
                oleo=' arvore da vida'
                preco='R$ 69,00'/>
                <Item
                produto={f4}
                oleo='colar mandala'
                preco='R$ 79,00'/>
   
            </div>
        </div>
    )
}

export default Produtos6