import React from 'react'
import Logo from '../../assets/images/logo.webp'
import AboutIcon from '../../assets/images/icon1.webp'
import ProductIcon from '../../assets/images/icon2.webp'
import CapabilitiesIcon from '../../assets/images/icon3.webp'
import ContactIcon from '../../assets/images/icon4.webp'
import styles from './HeaderCss.module.css'
function Header() {
  return (
    
    <header>
        <div className={styles.cpheCon}>
            <img className={styles.logo} src={Logo}/>
            <ul className={styles.headerMenu}>
                <li><a className={styles.links} href="javascript:void(0)"><span>About</span> <img className={styles.icon} src={AboutIcon}/></a></li>
                <li className={styles.active}><a className={styles.links} href="javascript:void(0)"><span>Product</span> <img className={styles.icon} src={ProductIcon}/></a></li>
                <li><a className={styles.links} href="javascript:void(0)"><span>Capabilities</span> <img className={styles.icon} src={CapabilitiesIcon}/></a></li>
                <li><a className={styles.links} href="javascript:void(0)"><span>Contact</span> <img className={styles.icon} src={ContactIcon}/></a></li>  
            </ul>
        </div>
    </header>
  )
}

export default Header
