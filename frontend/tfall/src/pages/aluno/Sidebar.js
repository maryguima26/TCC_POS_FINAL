import { Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";

const Sidebar = (props) => {
  return (
    <div>
      <style type="text/css">
        {`
        

          .letter{
            text-color:#48494B;
            text-transform: capitalize

          }
        `}
      </style>
      <CDBSidebar maxWidth="230px" textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <div className="letter">{props.nome}</div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link to="/aluno/info">
              <CDBSidebarMenuItem icon="info-circle">
                Informações
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/aluno/exercicio">
              <CDBSidebarMenuItem icon="th-large">Atividade</CDBSidebarMenuItem>
            </Link>
            <Link to="/aluno/plano">
              <CDBSidebarMenuItem icon="sticky-note">Plano</CDBSidebarMenuItem>
            </Link>
            <Link to="/aluno/contato">
              <CDBSidebarMenuItem icon="envelope" iconType="solid">
                Contatar Professor
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/aluno/evolucao">
              <CDBSidebarMenuItem icon="chart-line" iconType="solid">
                Evolução
              </CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
