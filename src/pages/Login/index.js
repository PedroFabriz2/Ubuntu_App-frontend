import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import LogoTreeImg from '../../assets/treeLogo.png';
import LogoUbuntuImg from '../../assets/logoubuntu.png';


export default function Login() {
    const [ IDCriada, setId ] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { IDCriada });
            
            localStorage.setItem('ongId', response.data.id);
            localStorage.setItem('ongName', response.data.nome);
            alert('Login Confirmado, Clique OK para seguir.')
            history.push('/profile');
        }catch(err){
            alert(`Erro no login, ONG não encontrada: ${err}`);
        }
    }

    return(
        <div className="login-container">
            
                <section className="form">
                    <form onSubmit={handleLogin}>
                        <h1>Faça seu login</h1>

                        <input 
                            placeholder="Sua ID"
                            value={IDCriada}
                            onChange={e => setId(e.target.value)}
                        />
                        <button className="button" type='submit'>Entrar</button>

                        <Link className="link" to="/cadastro">
                            <FiLogIn size={24} color="#2A4B43"/>
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>

            <img src={LogoTreeImg} alt='TreeApp' />
            <div className="imgUbuntu">
                <img src={LogoUbuntuImg} alt='UbuntuImg' width="120px" height="134px" />
            </div>
            
        </div>
    );
}