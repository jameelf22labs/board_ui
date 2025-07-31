export function getRandomColor(): string {
  const colors = [
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#FFD93D",
    "#FF9F1C",
    "#845EC2",
    "#00C9A7",
    "#F67280",
    "#2EC4B6",
    "#FF6F91",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}
