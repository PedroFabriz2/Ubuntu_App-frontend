import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import './styles.css';

import LogoTreeImg from '../../assets/treeLogo.png';
import LogoUbuntuImg from '../../assets/logoubuntu.png';


export default function Login() {
    return(
        <div className="login-container">
            
                <section className="form">
                    <form>
                        <h1>Faça seu login</h1>

                        <input placeholder="Sua ID"/>
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