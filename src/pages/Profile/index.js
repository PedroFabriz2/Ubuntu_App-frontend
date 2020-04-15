import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiTrash2 } from 'react-icons/fi';
import './styles.css';

import api from '../../services/api';

import LogoTreeImg from '../../assets/just_tree.png';


export default function Profile() {
    const [ incidents, setIncidents ] = useState([]);
    const history = useHistory();
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');

    useEffect(()=>{
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response=>{
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try{
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter( incident => incident.id !== id));
        }catch (err){
            alert('Erro! Não foi possível deletar o caso. Tente novamente!');
        }
    }

    async function handleLogOut(){
        localStorage.clear();

        history.push('/');
    }


    //aqui o useEffect entra em açao a cada vez que a variavel ongId muda.
    //a acao eh: dentro de 'profile' voce coloca o ongID no espaço do authorization do header
    // e then... set the incidents with response.data(that is de data from the body)
    
    return(
        <div className="profile-container">
            <header>
                <img src={LogoTreeImg} alt='treeApp' width="150px" height="150px" />
                <span>Olá, {ongName}!</span>
                <Link className="button" to="/new">
                    Novo Caso
                </Link>
                <button onClick={handleLogOut} type='button'>
                    <FiLogOut size={30} color="#2A4B43" />
                </button>
            </header>

            <h1>Seus casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                    <strong>Caso:</strong>
                    <p>{incident.title}</p>
                
                    <strong>Descrição:</strong>
                    <p>{incident.description}</p>
                
                    <strong>Formas de ajudar:</strong>
                    <p>{incident.value}</p>
                    <button onClick={()=>{handleDeleteIncident(incident.id)}} type="button">
                        <FiTrash2 size={20} color="#000000" />
                    </button>
                </li>
                ))}
            </ul>         
        </div>
    );
}
//Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)