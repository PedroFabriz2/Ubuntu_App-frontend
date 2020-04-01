import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';
import './styles.css';

//#6f8d6f
import LogoTreeImg from '../../assets/just_tree.png';
//import LogoUbuntuImg from '../../assets/logoubuntu.png';


export default function Profile() {
    return(
        <div className="profile-container">
            <header>
                <img src={LogoTreeImg} alt='treeApp' width="150px" height="150px" />
                <span>Olá, Ubuntu!</span>
                <Link className="button" to="/new">
                    Novo Caso
                </Link>
                <button type='button'>
                    <FiLogOut size={30} color="#2A4B43" />
                </button>
            </header>

            <h1>Seus casos cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso 1</strong>
                    <p>Caso1</p>
                
                    <strong>Descrição</strong>
                    <p>descrição1</p>
                
                    <strong>Valor</strong>
                    <p>R$120</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#000000" />
                    </button>
                </li>
                <li>
                    <strong>Caso 1</strong>
                    <p>Caso1</p>
                
                    <strong>Descrição</strong>
                    <p>descrição1</p>
                
                    <strong>Valor</strong>
                    <p>R$120</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#000000" />
                    </button>
                </li>
                <li>
                    <strong>Caso 1</strong>
                    <p>Caso1</p>
                
                    <strong>Descrição</strong>
                    <p>descrição1</p>
                
                    <strong>Valor</strong>
                    <p>R$120</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#000000" />
                    </button>
                </li>
                <li>
                    <strong>Caso 1</strong>
                    <p>Caso1</p>
                
                    <strong>Descrição</strong>
                    <p>descrição1</p>
                
                    <strong>Valor</strong>
                    <p>R$120</p>
                    <button type="button">
                        <FiTrash2 size={20} color="#000000" />
                    </button>
                </li>
            </ul>         
        </div>
    );
}