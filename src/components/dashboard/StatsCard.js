export default function StatsCard({ title, value, change, icon: Icon }) {
  return (
    <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-between hover:border-white/20 transition-all">
      <div>
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">{title}</p>
        <h3 className="text-2xl font-bold text-white mt-1">{value}</h3>
        {change && (
          <span className="text-xs text-emerald-400 font-medium inline-block mt-1">
            {change} vs last month
          </span>
        )}
      </div>
      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-xl">
          <Icon />
        </div>
      )}
    </div>
  );
}
