import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import './styles.css';


import LogoTreeImg from '../../assets/just_tree.png';
import LogoUbuntuImg from '../../assets/logoubuntu.png';

export default function new_In() {
    return(

        <div className="container">
            <div className="content">

                <section className="text">
                    <img src={LogoTreeImg} alt='treeApp' width="150px" height="150px" />
                    <h1>Cadastro de um novo Caso</h1>
                    <p>Adicione as informações necessárias ao lado e coloque mais um caso no ar!</p>
                    <Link className="link" to="/profile">
                            <FiArrowLeftCircle size={24} color="#2A4B43"/>
                            Voltar ao quadro de casos
                    </Link>
                </section>
                
                <form>
                    <input placeholder="Título do caso"/>
                    <textarea placeholder="Descrição"/>
                    <input placeholder="Valor em Reais"/>
                    <button className="button" type='submit'>Adicionar</button>
                </form>
                                    
                <div className="imgUbuntu">
                    <img src={LogoUbuntuImg} alt='UbuntuImg' width="120px" height="134px" />
                </div>
            </div>
        </div>
       
    );
}