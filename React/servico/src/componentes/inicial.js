import React, {useState} from 'react'
import '../App.css'

export default function Inicial(){
    const [menuAberto, setMenuAberto] = useState(false);

    const alternarMenu = () => {
      setMenuAberto(!menuAberto); // Alterna o estado do menu entre aberto e fechado
    };
    return(
        <div id='containerPaiInicial'>
            <nav className='menu'>
                <button className="menu-botao" onClick={alternarMenu}>&#9776;</button>
                <ul  className={`listaMenu ${menuAberto ? 'aberto' : ''}`}>
                    <li>Login</li>
                    <li>Cadastra-se</li>
                    <li>Serviços</li>
                    <li>Sobre</li>
                    <li>Avaliações</li>
                    <li>Contato</li>
                </ul>
            </nav>
            <header className='cabecaInicial'>
                <h1>Explore Nossos Serviços</h1>
                <p>Seja Bem-Vindo ao Serviço Expresso</p>
                <button>Entrar</button>
            </header>
            <main className='corpo'>
                <section className='cards-servicos'>
                    <h2>Nossos Serviços</h2>
                    <article className='service'>
                        <h3>Nome do serviço</h3>
                        <p>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet quidem dolorum dignissimos incidunt ratione eos. Quos enim eveniet officia rerum et, ex dolore repellat totam voluptates, incidunt consequatur? Corrupti.</p>
                        <hr></hr>
                        <h4>~R$80</h4>
                        <button>Agendar</button>
                    </article>
                    <article className='service'>
                        <h3>Nome do serviço</h3>
                        <p>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet quidem dolorum dignissimos incidunt ratione eos. Quos enim eveniet officia rerum et, ex dolore repellat totam voluptates, incidunt consequatur? Corrupti.</p>
                        <hr></hr>
                        <h4>~R$80</h4>
                        <button>Agendar</button>
                    </article>
                    <article className='service'>
                        <h3>Nome do serviço</h3>
                        <p>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet quidem dolorum dignissimos incidunt ratione eos. Quos enim eveniet officia rerum et, ex dolore repellat totam voluptates, incidunt consequatur? Corrupti.</p>
                        <hr></hr>
                        <h4>~R$80</h4>
                        <button>Agendar</button>
                    </article>
                </section>
                <section className='sobre'>
                    <div className='imagemParalax'></div>
                    <article className='sobreDetalhes'>
                        <h2>Sobre Nós</h2>
                        <p>      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum amet quidem dolorum dignissimos incidunt ratione eos. Quos enim eveniet officia rerum et, ex dolore repellat totam voluptates, incidunt consequatur? Corrupti.</p>
                        <button>Saiba Mais</button>
                    </article>
                </section>
                <section className='contato'>
                    <article className='informacoesContato'>
                        <h2>Contato</h2>
                        <div>
                            <p>(91)99818-5808</p>
                            <p>servicoexpresso@gmail.com</p>
                        </div>
                        <div>
                            <address>Rua Décima Segunda, 41 - Anitta Gerosa, Ananindeua - PA, 67033-012</address>
                        </div>
                    </article>
                    <ul className='icones'>
                        <li>
                            whatsapp
                        </li>
                        <li>
                            facebook
                        </li>
                        <li>
                            login
                        </li>
                    </ul>
                </section>
            </main>
            <footer className='pe'>

            </footer>
        </div>
    )
}