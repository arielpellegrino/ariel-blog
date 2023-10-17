import React from "react";
import styles from "./navbar.module.css"
import Image from "next/image";
import AuthLinks from "@/components/authLinks/AuthLinks";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import Link from "next/link";
const Navbar = () => {
    return (
        <div className={styles.container}>Navbar
            <div className={styles.social}>
                <Image src="/facebook.png" alt="Facebook" width={24} height={24}/>
                <Image src="/instagram.png" alt="Facebook" width={24} height={24}/>
                <Image src="/youtube.png" alt="Facebook" width={24} height={24}/>
            </div>
            <div className={styles.logo}>Ariel Pellegrino</div>
            <div className={styles.links}>
                <ThemeToggle/>
                <Link href="/">Home</Link>
                <Link href="/">Contato</Link>
                <Link href="/">Sobre</Link>
                <AuthLinks/>
            </div>

        </div>
    )
}

export default Navbar