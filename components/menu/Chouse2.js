import React from 'react'
import styles from '@/styles/Chouse2.module.css'

export const Chouse2Table=()=>{
  return (
    
    <div className={styles.table}>
        
      <select className={styles.thul} >
      <option >코인명</option>
        <option >비트코인</option>
        <option >도지코인</option>
        <option >코인미정</option>
    </select>
      <ul className={styles.thul}>
        <li >자동거래</li>
      </ul>
      <ul className={styles.tdul}> 로그인이 필요한 서비스입니다.</ul>
      <ul className={styles.tdul}>
      <button className={styles.button1}>Login</button>
      </ul>
      <ul className={styles.tdul}>
      </ul>
    </div>
  )
}


const Chouse2 = () => {
  return (
    <div className={styles.container}>
      <h2>거래소</h2>
      
      <div>
        <Chouse2Table/>
      </div>
    </div>
  )
}
export default Chouse2