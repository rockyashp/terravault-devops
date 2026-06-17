const colors = {
  blue: "bg-blue-600",
  green: "bg-green-600",
  orange: "bg-orange-500",
  red: "bg-red-600",
};

export default function Card({
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <div className={`${colors[color]} rounded-xl shadow-lg p-6 text-white`}>
      <h2 className="text-lg">{title}</h2>

      <p className="text-3xl font-bold mt-3">
        {value}
      </p>

      <p className="text-sm opacity-80 mt-2">
        {subtitle}
      </p>
    </div>
  );
}