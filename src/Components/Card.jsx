import './index.css'
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Card({Id,Val,setId,Len}){
    function Left_Slide(){
        const new_id=(Id-1+Len)%Len;
        setId(new_id);
    }
    function Right_Slide(){
        const new_id=(Id+1)%Len;
        setId(new_id);
    }
    function Random_generator(){
        const ll=0;
        const ul=5;
        const new_id=Math.floor(Math.random()*(ul-ll));
        setId(new_id);
    }
    return (
        <div className="h-screen flex items-center justify-center bg-slate-300 font-sans ">
            <div className="flex flex-col w-[700px] h-96 relative">
                <div className='absolute top-0 left-5 z-10'>
                    <img src={Val.image} alt="Image not present" height={150} width={150} className='rounded-full'/>
                </div>
                <div className="w-full flex flex-col align-center justify-center h-20 mb-5">
                    <div className='font-bold text-4xl flex justify-center'>Our Testimonials</div>
                    <div className="flex justify-between h-[3px] mx-[250px] mt-1 bg-purple-700"></div>
                </div>
                <div className='bg-white height-[420px] w-full'>
                    <div className='flex items-center flex-col'>
                        <div className="font-bold mt-10 text-2xl">{Val.name}</div>
                        <div className="text-gray-500 font-semibold">{Val.job}</div>
                    </div>
                    <div className="flex justify-center w-full pt-2">
                        <FontAwesomeIcon icon={faQuoteLeft} size="xl" style={{color: "#c0c0c0",}} />    
                    </div>
                    <div className="text-center text-gray-700 flex items-center justify-center w-full px-3">
                        {Val.text}
                    </div>
                    <div className="flex justify-center w-full pt-2">
                        <FontAwesomeIcon icon={faQuoteRight} size="xl" style={{color: "#c0c0c0",}} />    
                    </div>
                    <div className="flex justify-center w-full gap-5 pt-5">
                        <button onClick={Left_Slide}><FontAwesomeIcon icon={faChevronLeft} size="xl" style={{color: "#c0c0c0",}}/></button>
                        <button onClick={Right_Slide}><FontAwesomeIcon icon={faChevronRight} size="xl" style={{color: "#c0c0c0",}}/></button>
                    </div>
                    <div className='flex justify-center w-full pt-3'>
                        <button onClick={Random_generator} className='bg-purple-700 p-2 font-bold text-white rounded-md mb-10 mt-2'>Suprise Me</button>
                    </div>
                </div>
            </div>
        </div>
    )
}