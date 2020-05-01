import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeftCircle } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import LogoTreeImg from '../../assets/just_tree.png';
import LogoUbuntuImg from '../../assets/logoubuntu.png';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        };

        try{
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
                    
            })
            alert('Caso Criado! Clique OK para seguir.');
            history.push('/profile');

        } catch (err) {
            alert('Erro ao cadastrar novo caso. Tente novamente!');
            
        }
    }
    
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
                
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e =>setTitle(e.target.value)}
                    />
                    <textarea 
                        placeholder="Descrição"
                        maxLength="180"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input 
                        placeholder="Formas de ajudar"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type='submit'>Adicionar</button>
                </form>
                                    
                <div className="imgUbuntu">
                    <img src={LogoUbuntuImg} alt='UbuntuImg' width="120px" height="134px" />
                </div>
            </div>
        </div>
       
    );
}