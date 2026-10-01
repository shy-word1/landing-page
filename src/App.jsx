import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h2>DevSystem</h2>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizado">Aprendizado</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#mercado">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="inicio">
          <div className="inicio-texto">
            <p className="pequeno">TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS</p>

            <h1>Aprenda a criar seus próprios sistemas.</h1>

            <p>
              Conheça programação, desenvolvimento web, banco de dados e
              outras tecnologias usadas na área de informática.
            </p>

            <a href="#sobre" className="botao">
              Conhecer o curso
            </a>
          </div>

          <div className="imagem">
            <div className="codigo">
              <span>&lt;/&gt;</span>
              <p>Desenvolvimento<br />de Sistemas</p>
            </div>
          </div>
        </section>

        <section id="sobre" className="secao">
          <h2>Sobre o curso</h2>

          <div className="sobre">
            <div>
              <h3>O que é Desenvolvimento de Sistemas?</h3>

              <p>
                Desenvolvimento de Sistemas é a área que trabalha com a criação
                de programas, sites, aplicativos e sistemas para diferentes
                necessidades.
              </p>

              <p>
                Durante o curso, o aluno aprende conceitos de programação e
                conhece ferramentas utilizadas no desenvolvimento de sistemas.
              </p>
            </div>

            <div className="caixa">
              <h3>Objetivo do curso</h3>

              <p>
                Aprender a desenvolver soluções usando programação, banco de
                dados e diferentes tecnologias.
              </p>
            </div>
          </div>
        </section>

        <section id="aprendizado" className="secao escura">
          <h2>O que você aprende</h2>

          <div className="cards">
            <div className="card">
              <h3>Lógica de programação</h3>
              <p>Aprender a pensar e resolver problemas usando programação.</p>
            </div>

            <div className="card">
              <h3>Desenvolvimento web</h3>
              <p>Criação de sites e sistemas para a internet.</p>
            </div>

            <div className="card">
              <h3>Frontend</h3>
              <p>Desenvolvimento da parte visual dos sistemas.</p>
            </div>

            <div className="card">
              <h3>Backend</h3>
              <p>Programação responsável pelo funcionamento do sistema.</p>
            </div>

            <div className="card">
              <h3>Banco de dados</h3>
              <p>Organização e armazenamento das informações.</p>
            </div>

            <div className="card">
              <h3>APIs</h3>
              <p>Comunicação entre diferentes sistemas e aplicações.</p>
            </div>

            <div className="card">
              <h3>Aplicativos</h3>
              <p>Conhecimentos usados na criação de aplicações.</p>
            </div>

            <div className="card">
              <h3>Git e GitHub</h3>
              <p>Controle de versões e armazenamento dos projetos.</p>
            </div>
          </div>
        </section>

        <section id="tecnologias" className="secao">
          <h2>Tecnologias</h2>

          <div className="tecnologias">
            <div>HTML</div>
            <div>CSS</div>
            <div>JavaScript</div>
            <div>React</div>
            <div>Node.js</div>
            <div>SQL</div>
            <div>Git</div>
            <div>GitHub</div>
          </div>
        </section>

        <section id="mercado" className="secao escura">
          <h2>Áreas de atuação</h2>

          <div className="areas">
            <div>Desenvolvimento Frontend</div>
            <div>Desenvolvimento Backend</div>
            <div>Desenvolvimento Full Stack</div>
            <div>Desenvolvimento de aplicações</div>
            <div>Banco de dados</div>
            <div>Suporte e manutenção</div>
          </div>
        </section>

        <section id="projetos" className="secao">
          <h2>Exemplos de projetos</h2>

          <div className="projetos">
            <div className="projeto">
              <h3>Sistema de clientes</h3>
              <p>Cadastro e organização de clientes.</p>
            </div>

            <div className="projeto">
              <h3>Sistema de estoque</h3>
              <p>Controle de produtos e estoque.</p>
            </div>

            <div className="projeto">
              <h3>Agendamentos</h3>
              <p>Organização de horários e compromissos.</p>
            </div>

            <div className="projeto">
              <h3>Loja virtual</h3>
              <p>Site para apresentação e venda de produtos.</p>
            </div>

            <div className="projeto">
              <h3>Dashboard</h3>
              <p>Painel para visualizar informações.</p>
            </div>

            <div className="projeto">
              <h3>Lista de tarefas</h3>
              <p>Sistema simples para organizar tarefas.</p>
            </div>
          </div>
        </section>

        <section className="final">
          <h2>Seu futuro na tecnologia pode começar aqui.</h2>

          <p>
            Conheça o curso Técnico em Desenvolvimento de Sistemas.
          </p>

          <a href="#inicio" className="botao">
            Voltar ao início
          </a>
        </section>
      </main>

      <footer>
        <h3>Técnico em Desenvolvimento de Sistemas</h3>
        <p>SENAI • 2026</p>
        <p>Aluno: Pedro Henrique Barros Sousa</p>
      </footer>
    </div>
  );
}

export default App;