import React from "react";
import styles from "/styles/trade.module.css"

export function Trade(){ 
return (
  
  <table className={styles.tab}>
  <h5 className={styles.text}>자동거래</h5>
    <select style={{height:30, width:510 +"px"}} >
        <option >비트코인</option>
        <option >도지코인</option>
        <option >코인미정</option>
    </select>
  <tr className={styles.tr}>
    
  </tr>
  <tr className={styles.tr}>
<td className={styles.text}><br/>로그인이 필요한 서비스 입니다. <br/><br/><button className={styles.buttons}>로그인하러가기</button>
<br/><br/></td>
  </tr>
</table>
)
}