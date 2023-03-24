import React from "react";
import Account from "../components/account";
import styles from '../components/account.module.css';

const AccountsPage = () =>{
    return(
        <div>
        <h1 className={styles.header}>Who's watching?</h1>

        <ul className ={styles.general} >
        
        <Account title={'Iman'}/>
        <Account title={'je napokon'}/>
        <Account title={'nešto uradila'}/>
        </ul>

        
        <button className={styles["profile__btn"]}>Manage Profiles</button>
        </div>


    );
}

export default AccountsPage;