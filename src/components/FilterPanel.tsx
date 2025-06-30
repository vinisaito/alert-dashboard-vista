
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
    <Card className="p-6 mb-6 shadow-lg border-0 bg-gray-800/90 backdrop-blur-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <div className="space-y-2">
          <Label htmlFor="alerta" className="text-sm font-medium text-gray-200">
            Alerta
          </Label>
          <Input
            id="alerta"
            placeholder="Filtrar por alerta..."
            value={filters.alerta}
            onChange={(e) => handleFilterChange('alerta', e.target.value)}
            className="border-gray-600 bg-gray-700 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-200">Status</Label>
          <div className="flex gap-2">
            <Select value={filters.status || undefined} onValueChange={(value) => handleFilterChange('status', value)}>
              <SelectTrigger className="border-gray-600 bg-gray-700 text-white flex-1">
                <SelectValue placeholder="Selecionar status" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border border-gray-600 shadow-lg z-50">
                <SelectItem value="aberto" className="text-white hover:bg-gray-600">Aberto</SelectItem>
                <SelectItem value="fechado" className="text-white hover:bg-gray-600">Fechado</SelectItem>
                <SelectItem value="pendente" className="text-white hover:bg-gray-600">Pendente</SelectItem>
                <SelectItem value="em-andamento" className="text-white hover:bg-gray-600">Em Andamento</SelectItem>
              </SelectContent>
            </Select>
            {filters.status && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('status')} className="border-gray-600 text-gray-300 hover:bg-gray-700">
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-200">Grupo</Label>
          <div className="flex gap-2">
            <Select value={filters.grupo || undefined} onValueChange={(value) => handleFilterChange('grupo', value)}>
              <SelectTrigger className="border-gray-600 bg-gray-700 text-white flex-1">
                <SelectValue placeholder="Selecionar grupo" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border border-gray-600 shadow-lg z-50">
                <SelectItem value="suporte-tecnico" className="text-white hover:bg-gray-600">Suporte Técnico</SelectItem>
                <SelectItem value="infraestrutura" className="text-white hover:bg-gray-600">Infraestrutura</SelectItem>
                <SelectItem value="aplicacao" className="text-white hover:bg-gray-600">Aplicação</SelectItem>
                <SelectItem value="rede" className="text-white hover:bg-gray-600">Rede</SelectItem>
              </SelectContent>
            </Select>
            {filters.grupo && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('grupo')} className="border-gray-600 text-gray-300 hover:bg-gray-700">
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-200">Severidade</Label>
          <div className="flex gap-2">
            <Select value={filters.severidade || undefined} onValueChange={(value) => handleFilterChange('severidade', value)}>
              <SelectTrigger className="border-gray-600 bg-gray-700 text-white flex-1">
                <SelectValue placeholder="Selecionar severidade" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border border-gray-600 shadow-lg z-50">
                <SelectItem value="baixa" className="text-white hover:bg-gray-600">Baixa</SelectItem>
                <SelectItem value="media" className="text-white hover:bg-gray-600">Média</SelectItem>
                <SelectItem value="alta" className="text-white hover:bg-gray-600">Alta</SelectItem>
                <SelectItem value="critica" className="text-white hover:bg-gray-600">Crítica</SelectItem>
              </SelectContent>
            </Select>
            {filters.severidade && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('severidade')} className="border-gray-600 text-gray-300 hover:bg-gray-700">
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-200">Acionado</Label>
          <div className="flex gap-2">
            <Select value={filters.acionado || undefined} onValueChange={(value) => handleFilterChange('acionado', value)}>
              <SelectTrigger className="border-gray-600 bg-gray-700 text-white flex-1">
                <SelectValue placeholder="Selecionar" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 border border-gray-600 shadow-lg z-50">
                <SelectItem value="sim" className="text-white hover:bg-gray-600">Sim</SelectItem>
                <SelectItem value="nao" className="text-white hover:bg-gray-600">Não</SelectItem>
              </SelectContent>
            </Select>
            {filters.acionado && (
              <Button variant="outline" size="sm" onClick={() => clearFilter('acionado')} className="border-gray-600 text-gray-300 hover:bg-gray-700">
                ✕
              </Button>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="abertura" className="text-sm font-medium text-gray-200">
            Abertura
          </Label>
          <Input
            id="abertura"
            type="date"
            value={filters.abertura}
            onChange={(e) => handleFilterChange('abertura', e.target.value)}
            className="border-gray-600 bg-gray-700 text-white focus:border-blue-400 focus:ring-blue-400"
          />
        </div>
      </div>
    </Card>
  );
};

export default FilterPanel;
