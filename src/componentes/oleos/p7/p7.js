import Style from './p7.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/necessaire.png'
import f2 from '../../imgs/necessarie-cor-cru.png'
import f3 from '../../imgs/sacola-roxa.png'
import f4 from '../../imgs/sacola-phytoterapica-g.png'

function Produtos7(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo=' necessaire'
                preco='R$ 99,00'/>
                <Item
                produto={f2}
                oleo=' necessarie cor cru'
                preco='R$ 109,00'/>
                <Item
               produto={f3}
                oleo=' sacola-roxa'
                preco='R$ 39,00'/>
                <Item
                produto={f4}
                oleo=' phytoterapica'
                preco='R$ 29,00'/>
   
            </div>
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo=' necessaire'
                preco='R$ 99,00'/>
                <Item
                produto={f2}
                oleo=' necessarie cor cru'
                preco='R$ 109,00'/>
                <Item
               produto={f3}
                oleo=' sacola-roxa'
                preco='R$ 39,00'/>
                <Item
                produto={f4}
                oleo=' phytoterapica'
                preco='R$ 29,00'/>
   
            </div>
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo=' necessaire'
                preco='R$ 99,00'/>
                <Item
                produto={f2}
                oleo=' necessarie cor cru'
                preco='R$ 109,00'/>
                <Item
               produto={f3}
                oleo=' sacola-roxa'
                preco='R$ 39,00'/>
                <Item
                produto={f4}
                oleo=' phytoterapica'
                preco='R$ 29,00'/>
   
            </div>

        </div>
    )
}

export default Produtos7