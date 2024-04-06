
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div class="container mt-24 mx-auto px-12 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
      <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-8xl font-sans ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-400 to-blue-800  font-sans">Hello,   This is Lica</span>
      </h1>
      <p className="text-[#ADB7BE] text-4xl sm:text-lg mb-6 lg:text-6xl pt-10 pb-10  ">
      How was your day? <br>
      </br>
      Tell me about yourself
      </p>
      
      <div>
        <input className="w-11/12 bg-neutral-800 rounded-full h-14  placeholder:text-left ring-[#000000] text-xl indent-9 font-sans " placeholder="Enter your text here" id="aigive"></input>

      </div>

      <div className="text-[#ADB7BE] text-2xl sm:text-xl lg:4xl pt-6 " id = "aiget"> </div>
      </div>


      
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-[#181818] w-100 h-500">
      
      </div>
      <br></br>
      
      </div>
      </div>
      </div>
    </main>
  );
}
