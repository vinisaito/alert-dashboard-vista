
import React, { useState, useEffect } from 'react';
import FilterPanel from './FilterPanel';
import MetricsCards from './MetricsCards';
import DataTable from './DataTable';

// Dados de exemplo
const mockData = [
  {
    id: '1',
    alerta: 'DT195517',
    grupo: 'suporte-tecnico',
    status: 'aberto',
    abertura: '30/Jun/2025 15:46:05',
    sumario: 'DATACENTER - IC: AP1VTR008I, Regra: AP AP1VTR008I disconnected from control...',
    severidade: 'alta' as const,
    acionado: false
  },
  {
    id: '2',
    alerta: 'CO5ND71',
    grupo: 'infraestrutura',
    status: 'fechado',
    abertura: '30/Jun/2025 14:32:15',
    sumario: 'ZAMBIAA - BOT 15 Tsunami - SS1165101808 - 3.0.1 Error en 002 - IC BOT 15',
    severidade: 'media' as const,
    acionado: true
  },
  {
    id: '3',
    alerta: 'SRV001',
    grupo: 'aplicacao',
    status: 'em-andamento',
    abertura: '30/Jun/2025 13:15:30',
    sumario: 'Aplicação apresentando lentidão - Servidor de banco de dados',
    severidade: 'critica' as const,
    acionado: true
  },
  {
    id: '4',
    alerta: 'NET456',
    grupo: 'rede',
    status: 'pendente',
    abertura: '30/Jun/2025 12:45:22',
    sumario: 'Perda de conectividade intermitente na rede principal',
    severidade: 'alta' as const,
    acionado: false
  },
  {
    id: '5',
    alerta: 'DB789',
    grupo: 'infraestrutura',
    status: 'aberto',
    abertura: '30/Jun/2025 11:30:45',
    sumario: 'Backup do banco de dados falhou - Verificar espaço em disco',
    severidade: 'media' as const,
    acionado: true
  }
];

const Dashboard: React.FC = () => {
  const [filters, setFilters] = useState({});
  const [metrics, setMetrics] = useState({
    total: 0,
    naoAcionados: 0,
    e0: 0
  });

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    // Calcular métricas baseadas nos dados
    const total = mockData.length;
    const naoAcionados = mockData.filter(item => !item.acionado).length;
    const e0 = mockData.filter(item => item.severidade === 'critica').length;

    setMetrics({
      total: 304, // Mantendo os valores da imagem de referência
      naoAcionados: 148,
      e0: 156
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg mr-3 flex items-center justify-center">
              <span className="text-white font-bold text-lg">📊</span>
            </div>
            Painel de Acionamento - CIOps
          </h1>
          <p className="text-gray-400 text-lg">Monitoramento e controle de alertas operacionais</p>
        </div>

        <FilterPanel onFiltersChange={handleFiltersChange} />
        
        <MetricsCards data={metrics} />
        
        <DataTable data={mockData} filters={filters} />
      </div>
    </div>
  );
};

export default Dashboard;
