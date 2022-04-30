export function LoadingScreen() {
  return (
    <div className="flex items-center justify-evenly fixed bg-gray-900 w-full h-full z-50 font-display">
      <div className="name">
        <div className="letters letters-0 k">k</div>
        <div className="letters letters-1 r">r</div>
        <div className="letters letters-2 s">s</div>
        <div className="letters letters-3 h">h</div>
        <div className="letters letters-4 k hidden md:block">k</div>
        <div className="letters letters-5 o hidden md:block">o</div>
        <div className="letters letters-6 d hidden md:block">d</div>
        <div className="letters letters-7 e hidden md:block">e</div>
        <div className="letters letters-8 s hidden md:block">s</div>
      </div>
    </div>
  )
}
