import Style from './p2.module.css'
import Item from '../../props/item';

import f1 from '../../imgs/oleovege-abacate.png'
import f2 from '../../imgs/oleovege-amendoadoce.png'
import f3 from '../../imgs/oleovege-camomila.png'
import f4 from '../../imgs/oleovege-girassol.png'
import f5 from '../../imgs/oleovege-jojoba.png'
import f6 from '../../imgs/oleovege-maracuja.png'
import f7 from '../../imgs/oleovege-rosamosq.png'
import f8 from '../../imgs/oleovege-rosamosqrosa.png'
import f9 from '../../imgs/oleovege-sementedeuva.png'
import f10 from '../../imgs/oleovege-sementeuvagrande.png'
import f11 from '../../imgs/oleovege-rollon.png'
import f12 from '../../imgs/oleoessen-sandalo.png'

function Produtos2(){
    return(
        <div className={Style.caixona}>
            
            <div className={Style.caixa}>
                <Item
                produto={f1}
                oleo='abacate'
                preco='R$ 25,00'/>

                <Item
                produto={f2}
                oleo=' amendoa doce'
                preco='R$ 87,00'/>

                <Item
                produto={f3}
                oleo=' camomila'
                preco='R$ 45,00'/>

                <Item
                produto={f4}
                oleo=' girassol'
                preco='R$ 39,00'/>

            </div>
            <div className={Style.caixa}>
                <Item
                produto={f5}
                oleo=' jojoba'
                preco='R$ 19,00'/>

                <Item
                produto={f6}
                oleo=' maracuja'
                preco='R$ 29,00'/>

                <Item
                produto={f7}
                oleo='rosas'
                preco='R$ 67,00'/>

                <Item
                produto={f8}
                oleo=' rosamos'
                preco='R$ 419,00'/>

            </div>
            <div className={Style.caixa}>
                <Item
                produto={f9}
                oleo='semente de uva'
                preco='R$ 29,00'/>

                <Item
                produto={f10}
                oleo=' semente uva grande'
                preco='R$ 19,00'/>

                <Item
                produto={f11}
                oleo=' rollon'
                preco='R$ 89,00'/>

                <Item
                produto={f12}
                oleo=' sandalo'
                preco='R$ 45,00'/>

            </div>

        </div>
    )
}

export default Produtos2