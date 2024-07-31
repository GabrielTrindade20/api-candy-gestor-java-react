import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importando Font Awesome

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 30px;
  background-color: #F2AEC1; /* Cor de fundo do botão */
  color: white; /* Cor do ícone */
  border: none;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px; /* Espaço à esquerda */

  &:hover {
    color: #ffff;
    background-color: #BF3B6C; /* Cor de fundo do botão ao passar o mouse */
  }
`;

const Icon = styled.i`
  font-size: inherit;
`;

const IconButton = ({ to, iconClass }) => (
  <StyledLink to={to}>
    <Icon className={iconClass}></Icon>
  </StyledLink>
);

export default IconButton;
