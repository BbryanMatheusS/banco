import styles from "../styles/login.module.css"
import Link from "next/link"

import Input from "@/src/components/input/input"
import Button from "@/src/components/button/button"
import LoginCard from "@/src/components/loginCard/loginCard"
import { useState } from "react"

export default function Cadastro() {

    const [formData, setFormData] = useState({
        name: '',
        email:'',
        password: '',
        nascimento: '',
        tell: ''
    })

    const handleFormEdit = (event, name) => {
        setFormData({
            ...formData,
            [name] : event.target.value
        })
    }

    const handleForm = async (event) => {
        
        try {
            event.preventDefault()
            const response = await fetch(`/api/user/cadastro`,{
                method: 'POST',
                body: JSON.stringify(formData)
            })

            const json = await response.json()
            console.log(response.status)
            console.log(json)
        } catch (error) {
            
        }
    }

    return(
        <div className={styles.background}>
            <LoginCard title="Faça seu cadastro"> 
                <form onSubmit={handleForm} className={styles.form}>
                    <Input type="text" placeholder="Nome competo" require value={formData.name} onChange={(e) => {handleFormEdit(e, 'name')}}/>
                    <Input type="email" placeholder="Digite seu email" require value={formData.email} onChange={(e) => {handleFormEdit(e, 'email')}}/>
                    <Input type="password" placeholder="Digite uma senha" require value={formData.password} onChange={(e) => {handleFormEdit(e, 'password')}}/>
                    <Input type="date" require value={formData.nascimento} onChange={(e) => {handleFormEdit(e, 'nascimento')}}/>
                    <Input type="tel" placeholder="11 95804-5398" require value={formData.tell} onChange={(e) => {handleFormEdit(e, 'tell')}}/>                    
                    <Button>Cadastrar</Button>
                    <Link href="/login">Ja possui uma conta ?</Link>
                </form>
            </LoginCard>
        </div>
    )
} 