const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

// const formatDateValue = (value: string): string => {
//   const year = value.substring(0, 4);
//   const month = value.substring(5, 7);
//   const day = value.substring(8, 10);

//   return `${day}/${month}/${year}`;
// };

export default formatValue;
