import React from 'react';
import luffy from '../assets/luffy.jpg';
import { Empty } from './index';

const EmptyState = () => (
  <Empty>
    <img src={luffy} alt="Bem-vindo" style={{ width: 100 }} />
    <h3>Bem-vindo</h3>
    <p>Selecione uma vaga na aba ao lado.</p>
  </Empty>
);

export default EmptyState;
