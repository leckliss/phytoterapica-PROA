import Style from './p3.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/compessen-citrinos.png'
import f2 from '../../imgs/compessen-defense.png'
import f3 from '../../imgs/compessen-equilibrium.png'
import f4 from '../../imgs/compessen-relax.png'

function Produtos3(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo=' citrinos'
                preco='R$ 89,00'/>
                <Item
                 produto={f2}
                oleo=' defense'
                preco='R$ 19,00'/>
                <Item
                 produto={f3}
                oleo=' equilibrium'
                preco='R$ 29,00'/>
                <Item
                 produto={f4}
                oleo=' relax'
                preco='R$ 39,00'/>
   
            </div>

            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo=' citrinos'
                preco='R$ 89,00'/>
                <Item
                 produto={f2}
                oleo=' defense'
                preco='R$ 19,00'/>
                <Item
                 produto={f3}
                oleo=' equilibrium'
                preco='R$ 29,00'/>
                <Item
                 produto={f4}
                oleo=' relax'
                preco='R$ 39,00'/>
   
            </div>

            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo=' citrinos'
                preco='R$ 89,00'/>
                <Item
                 produto={f2}
                oleo=' defense'
                preco='R$ 19,00'/>
                <Item
                 produto={f3}
                oleo=' equilibrium'
                preco='R$ 29,00'/>
                <Item
                 produto={f4}
                oleo=' relax'
                preco='R$ 39,00'/>
   
            </div>
        </div>
    )
}

export default Produtos3