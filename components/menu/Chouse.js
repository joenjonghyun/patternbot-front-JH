import React from 'react'
import styles from '@/styles/Chouse2.module.css'

export const ChouseTable=()=>{
  return (
    
    <div className={styles.table}>
    
      <select className={styles.thul}>
      <option >코인명</option>
        <option >비트코인</option>
        <option >도지코인</option>
        <option >코인미정</option>
    </select>
      <ul className={styles.thul}>
        <li >자동거래</li>
      </ul>
      <ul className={styles.tdul}>
      <label className={styles.tdul}><input type="checkbox" />사용자 설정</label>
      <label className={styles.tdul}><input type="checkbox" />Ai 추천</label>
      </ul>
      <ul className={styles.tdul}>
      <label className={styles.tdul}> 투자 금액 </label>
      <input  type='text'/><br/><br/>
      <label className={styles.tdul}> 목표이익률 </label>
      <input  type='text' /><br/><br/>
      <label className={styles.tdul}> 손해률 </label>
      <input  type='text' />
      </ul>
      <button className={styles.button1}>자동거래 시작</button>
    </div>
  )
}


const Chouse = () => {
  return (
    <div className={styles.container}>
      <h2>거래소</h2>
      
      <div>
        <ChouseTable/>
      </div>
    </div>
  )
}
export default Chouse