import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './styles.css';

import api from "../../services/api";


import LogoTreeImg from '../../assets/just_tree.png';
import LogoUbuntuImg from '../../assets/logoubuntu.png';

export default function Cadastro() {
    const [ nome, setNome ] = useState('');
    const [ IDCriada, setIDCriada ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ insta, setInsta ] = useState('');
    const [ picpay, setPicpay ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');

    const history = useHistory();
    
    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            IDCriada,
            email,
            whatsapp,
            insta,
            picpay,
            city,
            uf,
        }

        try {
            const response = await api.post('ongs', data);

            alert(`Sucesso! Seu ID de acesso: ${IDCriada} e seu ID de segurança: ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert("Algo deu errado, tente novamente");
        }
    
    }
    
    return (
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
                
                <form onSubmit={handleCadastro}>
                    <input 
                        placeholder="Nome da ONG"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input 
                        placeholder="ID de Acesso"
                        value={IDCriada}
                        onChange={e => setIDCriada(e.target.value)}
                    />
                    <input
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Whatsapp (incluir DDI e DDD)"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <input 
                        placeholder="Instagram (sem o @)"
                        value={insta}
                        onChange={e => setInsta(e.target.value)}
                    />
                    <input 
                        placeholder="picpay (sem o @)"
                        value={picpay}
                        onChange={e => setPicpay(e.target.value)}
                    />
                    <div className="group_input">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
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