import Styles from '../css/page.module.css'

function Home() {

    
    return (
        <div className={Styles.page}>
            <div className={Styles.pageTitulo}>
                <h1>Informações do Sistema</h1>
            </div>

            <div className={Styles.informacoes}>
                <div className={Styles.itensCard}>
                    <h3>Quantidade De Receitas Cadastradas</h3>

                        <p>5 Receitas</p>
                </div>

                <div className={Styles.itensCard}>
                    <h3>Pedidos em Aberto</h3>

                        <p>5 pedidos</p>
                </div>

                <div className={Styles.itensCard}>
                    <h3>Relatório de Vendas</h3>

                        <p>4 vendas no mês</p>
                </div>
            </div>
            
            <div className={Styles.cardEntrega}>
                <h2>Data de Entrega de pedidos</h2>

                <div className={Styles.cardCalendario}>
                    <p>Calendário</p>
                </div>
            </div>
        </div>
    )
}



export default Home