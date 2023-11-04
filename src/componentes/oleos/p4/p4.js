import Style from './p4.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/argila-amarela.png'
import f2 from '../../imgs/argila-branca.png'
import f3 from '../../imgs/argila-verde.png'
import f4 from '../../imgs/seiva-sanguededragon.png'

function Produtos4(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo=' amarela'
                preco='R$ 49,00'/>
                <Item
                produto={f2}
                oleo=' branca'
                preco='R$ 49,00'/>
                <Item
                produto={f3}
                oleo=' verde'
                preco='R$ 49,00'/>
                <Item
                produto={f4}
                oleo=' sangue de dragon'
                preco='R$ 49,00'/>
   
            </div>
        </div>
    )
}

export default Produtos4