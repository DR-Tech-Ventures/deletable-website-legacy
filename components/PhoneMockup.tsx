import Image from 'next/image'

export function VaultMockup() {
  const items = [
    { title: 'Bank login', timer: '1h 47m', color: '#FF3B2F', type: 'note' },
    { title: 'SSN photo', timer: '23m', color: '#FF9F0A', type: 'photo' },
    { title: 'Meeting notes', timer: '6d 4h', color: '#30D158', type: 'note' },
    { title: 'Wi-Fi password', timer: '2d 11h', color: '#0A84FF', type: 'note' },
  ]
  return (
    <div aria-hidden="true" className="bg-[#0A0A0A] rounded-4xl p-4 w-[220px] border border-[#2C2C2C] shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-6 h-6 rounded-md bg-[#FF3B2F] flex items-center justify-center text-[10px]">🦝</div>
          <span className="text-[#FF3B2F] font-bold text-sm">Deletable</span>
          <span className="text-white font-bold text-sm">Vault</span>
        </div>
        <span className="text-[#505050] text-[10px]">⌕</span>
      </div>
      {/* Filter chips */}
      <div className="flex gap-1 mb-3 overflow-hidden">
        <span className="bg-[#FF3B2F22] border border-[#FF3B2F] text-[#FF3B2F] text-[9px] px-2 py-0.5 rounded-full font-semibold">All</span>
        <span className="border border-[#2C2C2C] text-[#505050] text-[9px] px-2 py-0.5 rounded-full">Notes</span>
        <span className="border border-[#2C2C2C] text-[#505050] text-[9px] px-2 py-0.5 rounded-full">Photos</span>
      </div>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, i) => (
          <div key={i} className="bg-[#1C1C1C] rounded-xl p-2.5 h-[76px] flex flex-col justify-between">
            <div className="flex items-start justify-between gap-1">
              <span className="text-white text-[10px] font-medium leading-tight">{item.title}</span>
              <span className="text-[#505050] text-[9px] shrink-0">{item.type === 'photo' ? '📷' : '📝'}</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              <span className="text-[9px] font-medium" style={{ color: item.color }}>{item.timer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function StatsMockup() {
  return (
    <div aria-hidden="true" className="bg-[#0A0A0A] rounded-4xl p-4 w-[220px] border border-[#2C2C2C] shadow-2xl">
      {/* Header */}
      <div className="flex items-center gap-1.5 mb-3">
        <Image src="/raccoon.png" alt="" width={24} height={24} sizes="24px" className="w-6 h-6 object-contain" />
        <span className="text-white font-bold text-sm">Trash Stats</span>
      </div>
      {/* Tier hero */}
      <div className="bg-[#1C1C1C] rounded-xl p-3 mb-2 text-center">
        <Image src="/raccoon.png" alt="" width={56} height={56} sizes="56px" className="w-14 h-14 object-contain mx-auto mb-1" />
        <div className="text-white font-bold text-xs mb-0.5">Trash Panda</div>
        <div className="text-[#A0A0A0] text-[9px]">Just warming up…</div>
        <div className="mt-2 h-1 bg-[#2C2C2C] rounded-full overflow-hidden">
          <div className="h-full w-[47%] bg-[#0A84FF] rounded-full" />
        </div>
        <div className="text-[#505050] text-[8px] mt-1">47 / 100 → Bin Raider</div>
      </div>
      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { label: 'Total Deleted', value: '47', color: '#FF3B2F' },
          { label: 'Space Freed', value: '2.3 MB', color: '#30D158' },
          { label: 'Notes', value: '31', color: '#0A84FF' },
          { label: 'Photos', value: '16', color: '#BF5AF2' },
        ].map(s => (
          <div key={s.label} className="bg-[#1C1C1C] rounded-xl p-2 text-center">
            <div className="font-bold text-xs" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[#505050] text-[9px]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
