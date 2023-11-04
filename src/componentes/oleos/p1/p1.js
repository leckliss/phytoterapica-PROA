import Style from './p1.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/oleoessen-alecrim.png'
import f2 from '../../imgs/oleoessen-bergamota.png'
import f3 from '../../imgs/oleoessen-copaiba.png'
import f4 from '../../imgs/oleoessen-copaibag.png'
import f5 from '../../imgs/oleoessen-eucalipto.png'
import f6 from '../../imgs/oleoessen-geranio.png'
import f7 from '../../imgs/oleoessen-hortelapimen.png'
import f8 from '../../imgs/oleoessen-lavanda.png'
import f9 from '../../imgs/oleoessen-lavanda-bulgaria.png'
import f10 from '../../imgs/oleoessen-limaosici.png'
import f11 from '../../imgs/oleoessen-melaleuca.png'
import f12 from '../../imgs/oleoessen-patchouli.png'

function Produtos1(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='Alegrim'
                preco='R$ 25,00'/>

                <Item
                produto={f2}
                oleo=' bergamota'
                preco='R$ 87,00'/>

                <Item
                produto={f3}
                oleo=' copaiba'
                preco='R$ 45,00'/>

                <Item
                produto={f4}
                oleo=' copaibag'
                preco='R$ 39,00'/>

            </div>
            <div className={Style.caixa}>
                <Item
                produto={f5}
                oleo=' eucalipto'
                preco='R$ 19,00'/>

                <Item
                produto={f6}
                oleo=' geranio'
                preco='R$ 29,00'/>

                <Item
                produto={f7}
                oleo=' hortela pimenta'
                preco='R$ 67,00'/>

                <Item
                produto={f8}
                oleo=' lavanda'
                preco='R$ 419,00'/>

            </div>
            <div className={Style.caixa}>
                <Item
                produto={f9}
                oleo=' lavanda bulgaria'
                preco='R$ 29,00'/>

                <Item
                produto={f10}
                oleo=' limaos'
                preco='R$ 19,00'/>

                <Item
                produto={f11}
                oleo=' melaleuca'
                preco='R$ 89,00'/>

                <Item
                produto={f12}
                oleo=' patchouli'
                preco='R$ 45,00'/>

            </div>

        </div>
    )
}

export default Produtos1