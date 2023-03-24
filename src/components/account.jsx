import React from "react";
import styles from '../components/account.module.css'

const  Account = (props) => {
    return (
   
<div>


    <ul className={styles.account__container}>     
    	<li>
            <button className={styles["profile__pic"]}></button>
            <h1 className={styles.accounts}>{props.title}</h1>
        </li>       
    </ul>
    
</div>
                 

    );

}

export default Account;