export default function List() {
  return (
    <div className="flex justify-between">
      <ul className="flex flex-col gap-7">
        <p className="font-semibold uppercase">Gradução</p>
        <li>
          GRADUAÇÃO - ADMINISTRAÇÃO DE EMPRESAS
          UNIFOR | 2019 - 2021
        </li>
        <li>
          MBA - INTELIGENCIA COMPETITIVA E BIG DATA
          DESCOMPLICA | 2020 - 2021
        </li>
        <li>
          PROCESSOS GERENCIAIS
          SENAC | 2017 - 2019
        </li>
      </ul>
      <div className="flex flex-col">
        <p className="font-semibold uppercase mb-5">Experiência</p>
        <p className="font-semibold uppercase">Software Engineer</p>
        <ul className="flex flex-col gap-1 mb-5 sm:max-w-sm">
          <li>
            Liderar reuniões e equipes, definir objetivos e monitorá-
            los
          </li>
          <li>
            Entender as funcionalidades do sistema e transformá-las
            em tarefas
          </li>
          <li>
            Trazer vida para Figmas design
          </li>
        </ul>
        <p className="font-semibold uppercase">Full Stack Development - Júnior</p>
        <ul className="flex flex-col gap-1 mb-5 max-w-sm">
          <li>
            Trazer vida para Figmas design
          </li>
          <li>
            Trabalhei com PHP e MySQL em projetos de criação de
            sites
          </li>
          <li>
            Trabalhei em criação de aplicativos com Flutter
          </li>
        </ul>
        <p className="font-semibold uppercase">Assistente de Controladoria</p>
        <ul className="flex flex-col gap-1 mb-5 max-w-sm">
          <li>
            Analisar indicadores em busca de melhorias
          </li>
          <li>
            Responsável por realizar rateio em contas financeiras
          </li>
          <li>
            Desenhar novos processos internos com Bizagi
          </li>
        </ul>
      </div>
    </div>
  );
}