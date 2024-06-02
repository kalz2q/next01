export default function Home() {
  return (
    <div className="flex flex-wrap m-5 gap-5">
      <div className="egg-box relative w-25 h-25 bg-pink">
        <div className="egg absolute w-20 h-25 bg-deepskyblue left-1/2 transform -translate-x-1/2 rounded-full"></div>
      </div>
      <div className="eyes-box relative w-25 h-25 bg-yellow">
        <div className="eye-box-eye absolute w-3.5 h-3.5 bg-white rounded-full top-5 left-5 shadow-[40px_0_0_#fff,2px_0_0_5px_#191970,42px_0_0_5px_#191970]"></div>
        <div className="eye-box-mouth absolute w-8.75 h-3.75 top-17.5 left-7.5 rounded-[5px_5px_15px_15px] border-3 border-red bg-[radial-gradient(at_50%_100%,#f5750f_8px,blue_8px)]"></div>
      </div>
      <div className="nose-box relative w-25 h-25 bg-[rgba(205,92,92,0.3)]">
        <div className="nose-box-eye absolute w-3 h-3 bg-black rounded-full top-6.25 left-5.5 shadow-[40px_0_0_#000]"></div>
        <div className="nose-box-mouth absolute w-2.5 h-2.5 top-12.5 left-10.5 rounded-full border-l border-r border-b border-black"></div>
      </div>
      <div className="man01-box relative w-25 h-25 rounded-full bg-lightcyan overflow-hidden">
        <div className="head-body absolute w-15 h-15 bg-lightsalmon rounded-full left-5 shadow-[0_80px_0_24px_turquoise]"></div>
      </div>
      <div className="test01 relative w-25 h-25 bg-[rgba(255,99,71,0.7)] rounded-full">
        <div className="test01-eye absolute w-3.5 h-3.5 bg-black border-1.75 border-white rounded-full shadow-[0_0_0_2px] top-5 left-5"></div>
        <div className="test01-eye absolute w-3.5 h-3.5 bg-black border-1.75 border-white rounded-full shadow-[0_0_0_2px] top-5 right-5"></div>
      </div>
      <div className="cloudNose relative w-25 h-25 bg-[rgba(205,92,92,0.3)]">
        <div className="cloudNose-mouth absolute w-5 h-5 bg-transparent rounded-full border-t-transparent border-r-blue border-l-blue border-b-blue top-1/2 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="mouth relative w-25 h-25 bg-lightgrey">
        <div className="mouth-tongue absolute w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-t-red top-3/5 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="border-radius relative w-25 h-25 bg-violet">
        <div className="border-radius-1 absolute w-20 h-7.5 bg-slateblue rounded-[5%_5%_50%_50%] top-[10%] left-[10%]"></div>
        <div className="border-radius-2 absolute w-20 h-7.5 border-3 border-red bg-[radial-gradient(at_50%_100%,red_20px,slateblue_20px)] rounded-[10px_10px_30px_30px] top-[50%] left-[10%]"></div>
      </div>
      <div className="neck relative w-25 h-25 bg-peachpuff overflow-hidden">
        <div className="neck-head absolute w-15 h-15 bg-lightsalmon rounded-full border border-black shadow-[0_110px_0_40px_lightsalmon] top-1.75 left-1/2 transform -translate-x-1/2 z-10"></div>
        <div className="neck-body absolute w-10 h-15 bg-lightsalmon top-7.5 left-1/2 transform -translate-x-1/2"></div>
      </div>
      <div className="eye relative w-25 h-25 bg-lightsteelblue rounded-full overflow-hidden">
        <div className="eye-brow absolute w-3.75 h-3.75 border-t-2 border-l-2 border-black rounded-[70%_0] top-8.75 left-5 transform -rotate-[135deg]"></div>
        <div className="eye-brow absolute w-3.75 h-3.75 border-t-2 border-l-2 border-black rounded-[70%_0] top-8.75 right-5 transform -rotate-[135deg]"></div>
        <div className="eye-mouth absolute w-3.75 h-3.75 border-t-2 border-l-2 border-red rounded-[300%_0] top-[75%] left-10.5 transform -rotate-[135deg]"></div>
        <div className="eye-nose absolute w-3.75 h-3.75 border-l border-r border-b border-black rounded-full top-[60%] left-10.5"></div>
      </div>
    </div>
  );
}
