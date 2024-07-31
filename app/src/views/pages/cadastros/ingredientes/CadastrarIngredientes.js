import React, { useState } from 'react';
import formStyles from '../../../css/cadastro.module.css';
import Styles from '../../../css/page.module.css';
import Alert from '../../../components/Alert';
import { Link } from 'react-router-dom';

const IngredientForm = () => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [unidade, setUnidade] = useState('');
    const [preco, setPreco] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            nome,
            descricao,
            quantidade,
            unidade,
            preco
        };

        try {
            const response = await fetch('http://localhost:8080/api/ingredientes/cadastrarIngrediente', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Erro ao cadastrar ingrediente');
            }
            // Limpar o formulário após o sucesso
            handleReset();

            //mostra o alerta
            setShowAlert(true);

            setTimeout(() => {
                window.location.href = '/ingredientes'
                console.log('Ingrediente cadastrado com sucesso!');
            }, 2000);
        } catch (error) {
            console.error('Erro ao cadastrar ingrediente:', error.message);
        }
    };

    const handleReset = () => {
        setNome('');
        setDescricao('');
        setQuantidade('');
        setUnidade('');
        setPreco('');
    };

    return (
        <div className={Styles.page}>
            <Alert nome="Cadastrado com sucesso!" showAlert={showAlert} />
            {/* <Alert nome="Cadastrado com sucesso!" /> */}
            <div className={Styles.pageTitulo}>
                <h1>Cadastrar Ingrediente</h1>
            </div>
            <div className={formStyles.containerForm}>
                <form className={formStyles.form} onSubmit={handleSubmit}>
                    <div className={formStyles.containerForm}>
                        <div className={formStyles.column}>
                            <div className={formStyles.itensForm}>
                                <label className={formStyles.label} htmlFor="nome">Nome do Ingrediente</label>
                                <input
                                    id="nome"
                                    type="text"
                                    className={formStyles.input}
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={formStyles.itensForm}>
                                <label className={formStyles.label} htmlFor="quantidade">Quantidade em Estoque</label>
                                <input
                                    id="quantidade"
                                    type="number"
                                    className={formStyles.input}
                                    value={quantidade}
                                    onChange={(e) => setQuantidade(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className={formStyles.column}>
                            <div className={formStyles.itensForm}>
                                <label className={formStyles.label} htmlFor="preco">Preço de Custo</label>
                                <input
                                    id="preco"
                                    type="number"
                                    step="0.01"
                                    className={formStyles.input}
                                    value={preco}
                                    onChange={(e) => setPreco(e.target.value)}
                                    required
                                />
                            </div>
                            <div className={formStyles.itensForm}>
                                <label className={formStyles.label} htmlFor="unidade">Unidade de Medida</label>
                                <select
                                    id="unidade"
                                    className={formStyles.select}
                                    value={unidade}
                                    onChange={(e) => setUnidade(e.target.value)}
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="kg">Kg</option>
                                    <option value="g">g</option>
                                    <option value="l">L</option>
                                    <option value="ml">ml</option>
                                    <option value="uni">Un</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={formStyles.containerForm}>
                        <div className={formStyles.column}>
                            <label className={formStyles.label} htmlFor="descricao">Descrição</label>
                            <textarea
                                id="descricao"
                                className={formStyles.textArea}
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}

                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className={`${formStyles.button} ${formStyles.buttonSubmit}`}>Cadastrar</button>
                        <button type="button" className={`${formStyles.button} ${formStyles.buttonReset}`} onClick={handleReset}>Resetar</button>
                        <button type="button" className={`${formStyles.button} ${formStyles.buttonVoltar}`}>
                            <Link to="/ingredientes">
                                <p>Voltar</p>
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default IngredientForm;
