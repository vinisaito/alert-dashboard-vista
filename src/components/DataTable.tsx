
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DataRow {
  id: string;
  alerta: string;
  grupo: string;
  status: string;
  abertura: string;
  sumario: string;
  severidade: 'baixa' | 'media' | 'alta' | 'critica';
  acionado: boolean;
}

interface DataTableProps {
  data: DataRow[];
  filters: any;
}

const DataTable: React.FC<DataTableProps> = ({ data, filters }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critica': return 'bg-red-500';
      case 'alta': return 'bg-orange-500';
      case 'media': return 'bg-yellow-500';
      case 'baixa': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'aberto': return 'bg-red-100 text-red-800';
      case 'fechado': return 'bg-green-100 text-green-800';
      case 'pendente': return 'bg-yellow-100 text-yellow-800';
      case 'em-andamento': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredData = data.filter(row => {
    return (
      (!filters.alerta || row.alerta.toLowerCase().includes(filters.alerta.toLowerCase())) &&
      (!filters.status || row.status === filters.status) &&
      (!filters.grupo || row.grupo === filters.grupo) &&
      (!filters.severidade || row.severidade === filters.severidade) &&
      (!filters.acionado || (filters.acionado === 'sim' ? row.acionado : !row.acionado)) &&
      (!filters.abertura || row.abertura.includes(filters.abertura))
    );
  });

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Painel de Acionamento</h2>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Exportar dados
          </Button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Alerta</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Grupo</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Abertura</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Sumário</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Severidade</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700">Acionado</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr 
                  key={row.id} 
                  className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="py-3 px-4 text-sm text-gray-900">{row.alerta}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{row.grupo}</td>
                  <td className="py-3 px-4">
                    <Badge className={`${getStatusColor(row.status)} border-0`}>
                      {row.status}
                    </Badge>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">{row.abertura}</td>
                  <td className="py-3 px-4 text-sm text-gray-600 max-w-xs truncate">
                    {row.sumario}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${getSeverityColor(row.severidade)} mr-2`}></div>
                      <span className="text-sm text-gray-700 capitalize">{row.severidade}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={row.acionado ? 'bg-green-100 text-green-800 border-0' : 'bg-red-100 text-red-800 border-0'}>
                      {row.acionado ? 'Sim' : 'Não'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};

export default DataTable;
