import React from 'react'
import styles from './PopupCss.module.css'
function Popup() {
  return (
    <div className={styles.popupBg}>
        <div className={styles.PopupBox}>
          <h2 className={styles.pipupTitle}>Request Products List <a className={styles.clocePopup} href="javascript:void(0);">X</a></h2>
          <div className={styles.popupBody}>
            <form>
              <input type='text' placeholder='Fast Name *' required/>
              <input type='email' placeholder='Work Email*' required/>
              <input type='text' placeholder='Company Name'/>
              <select>
                <option value={null}> Select Country</option>
                <option>India</option>
              </select>
              <input type='submit' value="Submit"/>
            </form>
          </div>
      </div>
    </div>
  )
}

export default Popup