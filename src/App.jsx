import BrailleSpinner from "./components/BrailleSpinner";
import TechBadge from "./components/TechBadge";


function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e0e0e0] p-8">
      <div className="w-full max-w-sm ml-0 sm:mx-auto">
        <h1 className="text-4xl font-bold"><span className="text-[#f74c00]">Hello, I'm</span> <span className="font-['JetBrains_Mono']">ferrissushi.</span><BrailleSpinner /></h1>
        <p className="text-sm text-[#888] mt-1">( Nicky Hariniaina )</p>
        <p className="text-lg text-[#e0e0e0] mt-6 font-['JetBrains_Mono']"><span className="border-b border-dashed border-[#f74c00]">backend</span> <span className="border-b border-dashed border-[#f74c00]">systems</span> <span className="border-b border-dashed border-[#f74c00]">&</span> <span className="border-b border-dashed border-[#f74c00]">low-level</span> <span className="border-b border-dashed border-[#f74c00]">programming</span></p>
        <div className="flex flex-wrap gap-2 mt-4">
          <TechBadge name="Java" />
          <TechBadge name="Rust" />
          <TechBadge name="TypeScript" />
          <TechBadge name="Lua" />
        </div>
<div className="text-base text-[#ccc] mt-6 font-['JetBrains_Mono']">
  <p>$ I'm currently working on:</p>
  <ul className="mt-1 ml-4 space-y-3">
    <li>
      <a href="https://brainfarter.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#f74c00] font-bold underline underline-offset-2">Brainfart</a>
      <span className="text-[#888]"> — trivia game for computer student</span>
      <div className="flex flex-wrap gap-1.5 mt-1.5">
        <TechBadge name="Next.js" />
        <TechBadge name="TypeScript" />
        <TechBadge name="PostgreSQL" />
      </div>
    </li>
    <li>
      <a href="https://github.com/NickyHariniaina/Vindustry" target="_blank" rel="noopener noreferrer" className="text-[#f74c00] font-bold underline underline-offset-2">Vindustry</a>
      <span className="text-[#888]"> — automation tower defense RTS with custom systems</span>
      <div className="flex flex-wrap gap-1.5 mt-1.5">
        <TechBadge name="Java" />
      </div>
    </li>
  </ul>
</div>
      </div>
    </div>
  )
}

export default App
