export default function Part5(){
  function handleToapple(){ window.location.href = "https://www.apple.com/app-store/" }
  function handleToplay(){ window.location.href = "https://play.google.com/store/games?device=windows" }
  return (
    <div className="w-full lg:m-20 lg:w-[90%] mx-auto bg-[#16213E] dark:bg-[#1A1A1A] text-gray-900 dark:text-gray-200 rounded-3xl flex flex-col lg:flex-row overflow-hidden">
      <div className="lg:flex lg:items-center lg:p-12 p-6 w-full lg:w-1/2">
        <div className="w-full flex items-center justify-center">
          <div className="w-56 h-56">
            <img className="w-full h-full object-contain" src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 p-6 w-full lg:w-1/2 bg-[#16213E] dark:bg-[#141414]">
        <div className="p-2 font-bold">
          <h1 className="text-3xl md:text-5xl text-white">Are you Ready to Start your online Order?</h1>
        </div>
        <p className="text-sm md:text-base text-gray-200">Bndulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="w-40 h-12 bg-white text-black rounded-2xl hover:bg-gray-200" onClick={handleToapple}>App Store</button>
          <button className="w-40 h-12 bg-red-700 text-white rounded-2xl hover:bg-red-800" onClick={handleToplay}>Play Store</button>
        </div>
      </div>
    </div>
  );
}
