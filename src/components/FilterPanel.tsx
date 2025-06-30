
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface FilterPanelProps {
  onFiltersChange: (filters: any) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ onFiltersChange }) => {
  const [filters, setFilters] = useState({
    alerta: '',
    status: '',
    grupo: '',
    severidade: '',
    acionado: '',
    abertura: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilter = (key: string) => {
    const newFilters = { ...filters, [key]: '' };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  return (
    <Card className="p-6 mb-6 shadow-lg border-0 bg-white/50 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="space-y-2">
          <Label htmlFor="alerta" className="text-sm font-medium text-gray-700">
            Alerta
          </Label>
          <Input
            id="alerta"
            placeholder="Filtrar por alerta..."
            value={filters.alerta}
            onChange={(e) => handleFilterChange('alerta', e.target.value)}
            className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Status</Label>
          <div className="flex gap-2">
            <Select value={filters.status || undefined} onValueChange={(value) => handleFilterChange('status', value)}>
              <SelectTrigger className="border-gray-200 flex-1">
                <SelectValue placeholder="Selecionar status" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                <SelectItem value="aberto">Aberto</SelectItem>
                <SelectItem value="fechado">Fechado</SelectItem>
                <SelectItem value="pendente">Pendente</SelectItem>
                <SelectItem value="em-andamento">Em Andamento</SelectItem>
              </SelectContent>
            </Select>
            {filters.status && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('status')}>
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Grupo</Label>
          <div className="flex gap-2">
            <Select value={filters.grupo || undefined} onValueChange={(value) => handleFilterChange('grupo', value)}>
              <SelectTrigger className="border-gray-200 flex-1">
                <SelectValue placeholder="Selecionar grupo" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                <SelectItem value="suporte-tecnico">Suporte Técnico</SelectItem>
                <SelectItem value="infraestrutura">Infraestrutura</SelectItem>
                <SelectItem value="aplicacao">Aplicação</SelectItem>
                <SelectItem value="rede">Rede</SelectItem>
              </SelectContent>
            </Select>
            {filters.grupo && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('grupo')}>
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Severidade</Label>
          <div className="flex gap-2">
            <Select value={filters.severidade || undefined} onValueChange={(value) => handleFilterChange('severidade', value)}>
              <SelectTrigger className="border-gray-200 flex-1">
                <SelectValue placeholder="Selecionar severidade" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                <SelectItem value="baixa">Baixa</SelectItem>
                <SelectItem value="media">Média</SelectItem>
                <SelectItem value="alta">Alta</SelectItem>
                <SelectItem value="critica">Crítica</SelectItem>
              </SelectContent>
            </Select>
            {filters.severidade && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('severidade')}>
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">Acionado</Label>
          <div className="flex gap-2">
            <Select value={filters.acionado || undefined} onValueChange={(value) => handleFilterChange('acionado', value)}>
              <SelectTrigger className="border-gray-200 flex-1">
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                <SelectItem value="sim">Sim</SelectItem>
                <SelectItem value="nao">Não</SelectItem>
              </SelectContent>
            </Select>
            {filters.acionado && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('acionado')}>
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="abertura" className="text-sm font-medium text-gray-700">
            Abertura
          </Label>
          <Input
            id="abertura"
            type="date"
            value={filters.abertura}
            onChange={(e) => handleFilterChange('abertura', e.target.value)}
            className="border-gray-200 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>
      </div>
    </Card>
  );
};

export default FilterPanel;
