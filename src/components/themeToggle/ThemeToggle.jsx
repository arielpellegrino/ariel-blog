import React from "react";
import styles from "./themeToggle.module.css"
import Image from "next/image";
const ThemeToggle = () => {
    return (
        <div className={styles.container}>

            <Image src="/public/moon.png" alt="" width={14} height={14}/>
            <div className={styles.ball}></div>
            <Image src="/public/sun.png" alt="" width={14} height={14}/>


            </div>
    )
}

export default ThemeToggle