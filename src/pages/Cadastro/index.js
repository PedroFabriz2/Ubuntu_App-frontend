import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';


import LogoTreeImg from '../../assets/just_tree.png';
import LogoUbuntuImg from '../../assets/logoubuntu.png';

export default function Cadastro() {
    return(

        <div className="container">
            <div className="content">

                <section className="text">
                    <img src={LogoTreeImg} alt='treeApp' width="150px" height="150px" />
                    <h1>Cadastro de ONG</h1>
                    <p>Cadastre sua ONG para que a comunidade possa ajudá-la de maneira mais fácil e barata!</p>
                    <Link className="link" to="/">
                            <FiArrowLeft size={24} color="#2A4B43"/>
                            Voltar ao login
                    </Link>
                </section>
                
                <form>
                    <input placeholder="Nome da ONG"/>
                    <input placeholder="E-mail"/>
                    <input placeholder="Whatsapp"/>
                    <input placeholder="Instagram"/>
                    <div className="group_input">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button" type='submit'>Inscrever</button>
                </form>
                                    
                <div className="imgUbuntu">
                    <img src={LogoUbuntuImg} alt='UbuntuImg' width="120px" height="134px" />
                </div>
            </div>
        </div>
       
    );
}