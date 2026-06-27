interface YearCardProps {
  year: string;
  emoji: string;
  color: string;
  description: string;
  onClick: () => void;
}

export default function YearCard({ year, emoji, color, description, onClick }: YearCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group p-6 sm:p-8 rounded-2xl text-white font-bold text-lg sm:text-2xl transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-offset-2 ${
        color === "green"
          ? "bg-gradient-to-br from-green-400 to-green-600 focus:ring-green-300"
          : color === "blue"
            ? "bg-gradient-to-br from-blue-400 to-blue-600 focus:ring-blue-300"
            : "bg-gradient-to-br from-purple-400 to-purple-600 focus:ring-purple-300"
      }`}
    >
      <div className="text-4xl sm:text-5xl mb-3 group-hover:scale-125 transition-transform">{emoji}</div>
      <div className="text-left">
        <div className="text-base sm:text-lg opacity-90">{year}</div>
        <div className="text-xs sm:text-sm opacity-75 mt-1 font-normal">{description}</div>
      </div>
    </button>
  );
}
