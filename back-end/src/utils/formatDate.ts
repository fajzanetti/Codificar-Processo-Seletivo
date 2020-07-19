/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function dateToDMYHM(date: Date) {
  const strArray = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const DIA = date.getDate();
  const MES = strArray[date.getMonth()];
  const ANO = date.getFullYear();
  let HORA = date.getHours();
  const MIN = date.getMinutes();
  let ap = 'AM';
  if (HORA >= 12) {
    ap = 'PM';
  }
  if (HORA > 12) {
    HORA -= 12;
  }
  if (HORA === 0) {
    HORA = 12;
  }
  return (
    `${DIA <= 9 ? `0${DIA}` : DIA}, ${MES} de ${ANO} às ${
    HORA <= 9 ? `0${HORA}` : HORA}:${MIN <= 9 ? `0${MIN}` : MIN} ${ap}`
  );
}
