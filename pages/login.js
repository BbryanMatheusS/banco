import styles from "../styles/Login.module.css"
import Link from "next/link"

import LoginCard from "@/src/components/loginCard/loginCard"
import Input from "@/src/components/input/input"
import Button from "@/src/components/button/button"

export default function Login () {
    return(
        <div className={styles.background}>
            <LoginCard title="Entre na sua conta">
                <form className={styles.form}>
                    <Input type="number" placeholder="Sua conta"/>
                    <Input type="password" placeholder="Digite sua senha"/>                    
                    <Button>Entrar</Button>
                    <Link href="/cadastro">Ainda nao possui uma conta ?</Link>
                </form>
                
            </LoginCard>
        </div>
    )
}