export function formatDateCreated(created_at: string) {
  const created = new Date(created_at);
  
  const dataFormatDayString = created.toLocaleDateString('PT-BR',{year: 'numeric', month: 'long', day: 'numeric'});

  return dataFormatDayString;
}