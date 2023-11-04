import Styles from './header.module.css'
import logo from '../imgs/logo.png'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className= {Styles.tudo}>    
            <div className= {Styles.caminhaum}>
            <svg className= {Styles.caminhão} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg> 
            <p>Com mais R$ 200,00 o frete é por nossa conta!</p>
            </div>
            <div className={Styles.headerlogo}>
                <Link to='/Meio'><img className={Styles.logo} src={logo}></img></Link>

                <div className={Styles.forms}>
                    <input className={Styles.pedido} type='text' placeholder= 'O que você procura?'></input>

                    <input className={Styles.desconto} type='text' placeholder= '-5% NA PRIMEIRA COMPRA'></input>

                    <svg className={Styles.perfil} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/></svg>

                    <svg className={Styles.carrinho} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                    
                </div>

                <div className={Styles.link}>
                    <ul>
                        <li><Link to='/Produtos1' className={Styles.link2}>ÓLEOS ESSENCIAIS</Link></li>
                        <li><Link to='/Produtos2'className={Styles.link2}>ÓLEOS VEGETAIS </Link></li>
                        <li><Link to='/Produtos3'className={Styles.link2}>SINERGIAS </Link></li>
                        <li><Link to='/Produtos4'className={Styles.link2}>COSMÉTICOS NATURAIS </Link></li>
                        <li><Link to='/Produtos5'className={Styles.link2}>HIGIENE PESSOAL </Link></li>
                        <li><Link to='/Produtos6'className={Styles.link2}>AROMATIZADORES</Link> </li>
                        <li><Link to='/Produtos7'className={Styles.link2}>ACESSÓRIOS </Link></li>
                    </ul>

                </div>

               

            </div>
        </div> 
    
    )
}
export default Header