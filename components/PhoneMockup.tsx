export function VaultMockup() {
  const items = [
    { title: 'Bank login', timer: '2h', color: '#FF3B2F' },
    { title: 'SSN photo', timer: '47m', color: '#FF9F0A' },
    { title: 'Medical note', timer: '6d', color: '#30D158' },
    { title: 'Password', timer: '1d', color: '#0A84FF' },
  ]
  return (
    <div className="bg-[#0A0A0A] rounded-[2rem] p-4 w-[220px] border border-[#2C2C2C] shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <span className="text-white font-bold text-base">Vault</span>
        <span className="text-[#505050] text-xs">🔍</span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div key={i} className="bg-[#1C1C1C] rounded-xl p-2.5 h-[80px] flex flex-col justify-between">
            <span className="text-white text-xs font-medium truncate">{item.title}</span>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-[10px]" style={{ color: item.color }}>{item.timer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function StatsMockup() {
  return (
    <div className="bg-[#0A0A0A] rounded-[2rem] p-4 w-[220px] border border-[#2C2C2C] shadow-2xl">
      <div className="mb-3 text-center">
        <div className="text-3xl mb-1">🗑️🦝🗑️</div>
        <div className="text-3xl">🗑️🗑️🗑️</div>
      </div>
      <div className="bg-[#1C1C1C] rounded-xl p-3 mb-2 text-center">
        <div className="text-[#FF3B2F] font-bold text-lg">47</div>
        <div className="text-[#A0A0A0] text-[10px]">items deleted</div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="bg-[#1C1C1C] rounded-xl p-2 text-center">
          <div className="text-white font-semibold text-sm">2.3 MB</div>
          <div className="text-[#505050] text-[10px]">freed</div>
        </div>
        <div className="bg-[#1C1C1C] rounded-xl p-2 text-center">
          <div className="text-white font-semibold text-sm">23m</div>
          <div className="text-[#505050] text-[10px]">saved</div>
        </div>
      </div>
    </div>
  )
}
