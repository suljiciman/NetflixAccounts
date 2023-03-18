import React from "react";
import Account from "../components/account";
import styles from '../components/account.module.css';

const AccountsPage = () =>{
    return(
        <div>
        <h1 className={styles.header}>Who's watching?</h1>

        <ul className ={styles.general} >
        <Account />
        <Account />
        <Account />
        </ul>

        
        <button className={styles["profile__btn"]}>Manage Profiles</button>
        </div>


    );
}

export default AccountsPage;