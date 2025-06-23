import React, { useEffect, useState } from 'react'

const Loading = ({onComplete}) => {

    const [text, setText] = useState("");
    const fullText = "Hello Visitor!";

    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setText(fullText.substring(0 , index))
        index++;
        if(index>fullText.length){
            clearInterval(interval);
            setTimeout(() => {
                onComplete();
            }, 1000);
        }
      }, 100);
      return () => clearInterval(interval)
    }, [onComplete])
    

  return (
    <div className='fixed inset-0 z-50 bg-gray-500 text-gray-100 flex flex-col items-center justify-center'>
        <div className='mb-4 text-4xl font-mono font-bold'>
            {text}<span className='animate-blink ml-1 font-light'>|</span>
        </div>

        <div className='w-[280px] h-[2px] bg-blue-200 rouded relative overflow-hidden'>
            <div className='w-[40%] h-full bg-purple-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar'>
              
            </div>
        </div>
    </div>
  )
}

export default Loading