
import React from 'react';
import { Card } from '@/components/ui/card';

interface MetricsCardsProps {
  data: {
    total: number;
    naoAcionados: number;
    e0: number;
  };
}

const MetricsCards: React.FC<MetricsCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="p-6 shadow-xl border-0 gradient-success text-white transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold mb-2">{data.total}</div>
          <div className="text-lg font-medium opacity-90">Total</div>
        </div>
      </Card>

      <Card className="p-6 shadow-xl border-0 gradient-warning text-white transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold mb-2">{data.naoAcionados}</div>
          <div className="text-lg font-medium opacity-90">Não acionados</div>
        </div>
      </Card>

      <Card className="p-6 shadow-xl border-0 gradient-info text-white transform hover:scale-105 transition-all duration-300">
        <div className="flex flex-col items-center text-center">
          <div className="text-4xl font-bold mb-2">{data.e0}</div>
          <div className="text-lg font-medium opacity-90">E0</div>
        </div>
      </Card>
    </div>
  );
};

export default MetricsCards;
