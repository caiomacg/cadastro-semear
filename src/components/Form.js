import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {number, object, string} from 'yup';
import React from 'react';

import videoBg from '../video/videoBg.mp4';
import './Form.css';

function Formulario () {
    //VALIDAÇÃO DAS RESPOSTAS COM O YUP
    const schema = object({
        primeiroNome: string().required("Campo obrigatório"),
        segundoNome: string().required("Campo obrigatório"),
        queroSer: string().required("Campo obrigatório"),
        email: string().required("Campo obrigatório"),
        cpf: number().required("Campo obrigatório").min(11,"CPF inválido"),
        senha: string().required("Campo obrigatório"),
        confirmarSenha: string().required("Campo obrigatório"),
    });

    const {register, handleSubmit, formState:{errors},} = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        console.log(data);
    }

    return (

      <section className='fundo'>
            
            <div className='overlay'>

            </div>
            <div className='bg'>
                <video src={videoBg} autoPlay loop muted />
            </div>

            <div className='container_header'>
                <img src='https://www.isemear.org.br/wp-content/uploads/2022/12/logo-white.png' alt='Logo do Semear'></img>
            </div>

            <div className='container'>

                <h1>Cadastre-se</h1>
                <p>Conheça a sua nova comunidade de mentoria social.</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='parte_1'>
                        <div className='form_1nome'>
                            <input type='text' placeholder='Primeiro Nome' {...register('primeiroNome')} />
                            <span className='error'>{errors?.primeiroNome?.message}</span>
                        </div>
                        <div className='form_2nome'>
                            <input type='text' placeholder='Segundo Nome' {...register('segundoNome')} />
                            <span className='error'>{errors?.segundoNome?.message}</span>
                        </div>
                    </div>

                    <div className='parte_2'>
                        <select {...register('queroSer')}>
                            <span className='error'>{errors?.queroSer?.message}</span> 
                            <option disabled selected>Quero ser</option>
                            <option >Mentor(a)</option>
                            <option>Mentorado(a)</option>
                        </select>

                    </div>

                    <div className='parte_3'>
                        <input type='email' placeholder="Email" {...register('email')}/>
                        <span className='error'>{errors?.email?.message}</span>
                    </div>

                    <div className='parte_4'>
                        <input type='number' placeholder="CPF (ex: XXX.XXX.XXX-XX)" {...register('cpf')}/>
                        <span className='error'>{errors?.cpf?.message}</span>
                    </div>

                    <div className='parte_5'>

                        <div className='senha'>
                            <input type='password' placeholder="Senha" {...register('senha')} />
                            <span className='error'>{errors?.senha?.message}</span>
                        </div>

                        <div className='confirmar_senha'>
                            <input type='password' placeholder="Confirmar senha" {...register('confirmarSenha')} />  
                            <span className='error'>{errors?.confirmarSenha?.message}</span>
                        </div>

                    </div>

                    <div className='aceitar_privacidade'>
                        <p>Ao clicar em Aceite e cadastre-se, você aceita as <a>Políticas de Privacidade</a> do Instituto Semear.</p>

                    </div>

                    <div className='parte_6'>
                        <button type="submit" className='btn_submit'>Aceitar e Cadastrar</button>
                    </div>

                    <div className='tem_umaconta_entrar'>
                        <div>
                            <p>Já tem uma conta?</p>
                        </div>

                        <div>
                            <a href="#">Entrar</a>
                        </div>

                    </div>

                </form>

            </div>

      </section>
    );
}



export default Formulario;