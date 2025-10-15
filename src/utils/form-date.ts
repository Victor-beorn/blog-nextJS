import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formDate(rowDate: string): string {
  const date = new Date(rowDate);
  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatHour(timestampMs: number): string {
  const date = new Date(timestampMs);
  return format(date, 'HH:mm:ss', {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rowDate: string): string {
  const date = new Date(rowDate);
  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
