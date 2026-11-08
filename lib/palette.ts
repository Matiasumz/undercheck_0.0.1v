// Combinaciones de afiche: fondo de la paleta con su tinta de contraste.
// Se reparten por posición para que afiches vecinos nunca repitan color.
export const POSTER_STYLES = [
  { bg: "#FF9E45", ink: "#1B1A18" }, // sodio
  { bg: "#A493FF", ink: "#1B1A18" }, // uv
  { bg: "#EFEDE7", ink: "#1B1A18" }, // yeso
];

export function posterStyle(index: number) {
  return POSTER_STYLES[index % POSTER_STYLES.length];
}
