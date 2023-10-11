import React from 'react'
import styles from './FooterCss.module.css'
import Facebook from '../../assets/images/facebook.webp'
import Youtube from '../../assets/images/youtube.webp'
import LinkDin from '../../assets/images/linkdin.webp'
import Twitter from '../../assets/images/twitter.webp'
import Mail from '../../assets/images/envelope.webp'
import Call from '../../assets/images/call.webp'

function Footer() {
  return (
    <footer>
        <div className={styles.cpheCon}>
            <div className={styles.socialMedia}>
                <a href="javasript:void(0);"><img src={Facebook} /></a>
                <a href="javasript:void(0);"><img src={Youtube} /></a>
                <a href="javasript:void(0);"><img src={LinkDin} /></a>
                <a href="javasript:void(0);"><img src={Twitter} /></a>
            </div>
            <div className={styles.mailPhone}>
                <a href="mailto:api@drreddys.com"><img src={Mail} /> api@drreddys.com</a>
                <a href="tel:+914049002253"><img src={Call} /> +91 40 49002253</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
