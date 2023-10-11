import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './ProcuctCss.module.css'
import SearchIcon from '../../assets/images/search.webp'
import FilterIcon from '../../assets/images/filter.webp'
import Loder from '../../assets/images/Loading.gif'
function Procuct() {
   
  return (
    <div className={styles.innerBody}>
        <Header/>
        <div className={styles.productBody}>
            <div className={styles.gradinatBg}>
                <div className={styles.productHead}>
                    <h2 className={styles.title}>Product</h2>
                    <div className={styles.alphaSeatch}>
                        <a href='javascript:void(0);'>A</a>
                        <a href='javascript:void(0);' className={styles.active}>B</a>
                        <a href='javascript:void(0);' >C</a>
                        <a href='javascript:void(0);' >D</a>
                        <a href='javascript:void(0);' >E</a>
                        <a href='javascript:void(0);' >F</a>
                        <a href='javascript:void(0);' >G</a>
                        <a href='javascript:void(0);' >H</a>
                        <a href='javascript:void(0);' >I</a>
                        <a href='javascript:void(0);' >J</a>
                        <a href='javascript:void(0);' >K</a>
                        <a href='javascript:void(0);' >L</a>
                        <a href='javascript:void(0);' >M</a>
                        <a href='javascript:void(0);' >N</a>
                        <a href='javascript:void(0);' >O</a>
                        <a href='javascript:void(0);' >P</a>
                        <a href='javascript:void(0);' >Q</a>
                        <a href='javascript:void(0);' >R</a>
                        <a href='javascript:void(0);' >S</a>
                        <a href='javascript:void(0);' >T</a>
                        <a href='javascript:void(0);' >U</a>
                        <a href='javascript:void(0);' >V</a>
                        <a href='javascript:void(0);' >W</a>
                        <a href='javascript:void(0);' >X</a>
                        <a href='javascript:void(0);' >Y</a>
                        <a href='javascript:void(0);' >Z</a>
                    </div>
                </div>
            </div>
            <div className={styles.cpheCon}>
                <div className={styles.searchSec}>
                    <form className={styles.searchForm}>
                        <input type='text' placeholder="Search Product"/>
                        <button type='button'><img src={FilterIcon}/></button>
                        <button type='button'><img src={SearchIcon}/></button>
                    </form>
                    <a href='javascript:void(0);' className={styles.request}>Request Product List</a>
                    <div className={styles.filterBG}></div>
                    <div className={styles.filterSec}>
                   
                        <a href='#' className={styles.closeFilter}>X</a>
                        <div className={styles.filterItem}>
                            <p>Therapeutic Category <span>(2)</span></p>
                            <div className={styles.ddArrow}>&gt;</div>
                            <div className={styles.expandedSec}>
                                <div className={styles.expCheck}>
                                    <input type='checkbox' />
                                    <label>label</label>
                                </div>
                                <div className={styles.expCheck}>
                                    <input type='checkbox' />
                                    <label>label</label>
                                </div>
                                <div className={styles.expCheck}>
                                    <input type='checkbox' />
                                    <label>label</label>
                                </div>
                                <div className={styles.expCheck}>
                                    <input type='checkbox' />
                                    <label>label</label>
                                </div>
                                <div className={styles.expCheck}>
                                    <input type='checkbox' />
                                    <label>label</label>
                                </div>
                                <div className={styles.expCheck}>
                                    <input type='checkbox' />
                                    <label>label</label>
                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.filterItem}>
                        <p>Dosage Form <span>(2)</span></p>
                            <div className={styles.ddArrow}>&gt;</div>
                        </div>
                        <div className={styles.filterItem}>
                        <p>Development Stage<span></span></p>
                            <div className={styles.ddArrow}>&gt;</div>
                        </div>
                        <div className={styles.filterItem}>
                         <p>API Technology   <span>(2)</span></p>
                            <div className={styles.ddArrow}>&gt;</div>
                        </div>
                        <div className={styles.btnSec}>
                            <a href='#' className={styles.appBtn}>Reset</a>
                            <a href='#' className={styles.appBtn}>Apply</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.productCon}>
                <div className={styles.cpheCon}>
                    <div className={styles.paroductList}>
                        <div className={styles.pItem}>
                            <div className={styles.pName}>Abaloparatide API</div>
                            <div className={styles.pNumber}><label>CAS Number:</label>247062-33-5</div>
                            <div className={styles.pNumber}><label>Therapeutic Category</label>Anti-Osteoporosis, Musculoskeletal</div>
                            <div className={styles.pNumber}><label>API Technology</label>Peptide</div>
                            <div className={styles.pNumber}><label>Dose Form</label>Injectable</div>
                            <a href="javascript:void(0);">Enquire</a>
                        </div>
                        <div className={styles.pItem}>
                            <div className={styles.pName}>Abaloparatide API</div>
                            <div className={styles.pNumber}><label>CAS Number:</label>247062-33-5</div>
                            <div className={styles.pNumber}><label>Therapeutic Category</label>Anti-Osteoporosis, Musculoskeletal</div>
                            <div className={styles.pNumber}><label>API Technology</label>Peptide</div>
                            <div className={styles.pNumber}><label>Dose Form</label>Injectable</div>
                            <a href="javascript:void(0);">Enquire</a>
                        </div>
                        <div className={styles.pItem}>
                            <div className={styles.pName}>Abaloparatide API</div>
                            <div className={styles.pNumber}><label>CAS Number:</label>247062-33-5</div>
                            <div className={styles.pNumber}><label>Therapeutic Category</label>Anti-Osteoporosis, Musculoskeletal</div>
                            <div className={styles.pNumber}><label>API Technology</label>Peptide</div>
                            <div className={styles.pNumber}><label>Dose Form</label>Injectable</div>
                            <a href="javascript:void(0);">Enquire</a>
                        </div>
                        <div className={styles.pItem}>
                            <div className={styles.pName}>Abaloparatide API</div>
                            <div className={styles.pNumber}><label>CAS Number:</label>247062-33-5</div>
                            <div className={styles.pNumber}><label>Therapeutic Category</label>Anti-Osteoporosis, Musculoskeletal</div>
                            <div className={styles.pNumber}><label>API Technology</label>Peptide</div>
                            <div className={styles.pNumber}><label>Dose Form</label>Injectable</div>
                            <a href="javascript:void(0);">Enquire</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/*<div className={styles.loading}>
             <img  src={Loder} /> Loding
  </div>*/}
        </div>
        <Footer/>
    </div>
  )
}

export default Procuct
