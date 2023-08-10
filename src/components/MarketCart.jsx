import { useContext , useEffect } from 'react'
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import cactuses from "../assets/cactusImages/import"
import pots from "../assets/potsImages/import"
import { ControlersContext } from '../Context/ControlersContext';
import { CartContext } from '../Context/CartContext';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import {motion} from "framer-motion"
import { CardTravel, Shop } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartIcon from './svg/CartIcon';

function MarketCart() {
   const {pot,setPot,cactus,setCactus ,quantity,setQuantity,finalCactus,finalPots}=useContext(ControlersContext);
   const {cart ,currentItem ,setCurrentItem ,setCart}= useContext(CartContext);
   const handelSelect = (key)=>{
      setPot(cart[key].pot)
      setCactus(cart[key].cactus)
      setQuantity(cart[key].quantity)
      setCurrentItem(key)
   }
   const handelAddNew = ()=>{
          let key = cart.length
          let newCart = cart
          newCart.push({pot:0,cactus:0,quantity:1})
          setCart(newCart)
          setPot(cart[key].pot)
          setCactus(cart[key].cactus)
          setQuantity(cart[key].quantity)
          setCurrentItem(key)
   }
   const handleRemove =(key)=>{
        if(cart.length>1){
          let newCart = cart.filter((item,i)=>key!==i)
          setCart(newCart)
          setCurrentItem(0)
        }
   }
   useEffect(() => {
        setPot(cart[currentItem].pot)
        setCactus(cart[currentItem].cactus)
        setQuantity(cart[currentItem].quantity)
   }, [cart])
   useEffect(() => {
        setPot(cart[currentItem].pot)
        setCactus(cart[currentItem].cactus)
        setQuantity(cart[currentItem].quantity)
   }, [currentItem])
   
  return (
    <motion.div initial={{x:-200}} animate={{x:0}}  className={`mb-2 py-6 flex sm:flex-col flex-col-reverse items-center justify-center gap-4 overflow-y-visible`}>
      <div 
      // alwayes show the last item
      data-current={currentItem}
      dir="rtl"
      className={`bg-bleach-fade xl:pt-8 md:pt-8 pt-8 max-w-full min-w-[450px]  rounded-lg flex justify-center items-center gap-2 overflow-x-auto overflow-y-visible transform transition-all`}
      // className={`xl:pt-12 pl-4 md:pt-10 pt-8 max-w-full rounded-lg flex gap-2 overflow-x-auto overflow-y-visible`}
      >
        {
          cart.map((item,key)=>{
            return(
              <div key={key}  className={'flex relative flex-col items-center gap-1 drop-shadow-lg'}>
              <button onClick={()=>handelSelect(key)} className={' w-20 h-20 bg-dark-white duration-100 rounded-lg   flex justify-center items-center flex-col border-2 overflow-y-visible  '+(key==currentItem?" border-green " :"border-[#0001] ")}>
                <div className={(key==currentItem?"scale-[1.25]":"scale-[1.20]")+' duration-150 relative -translate-y-5 w-[50px] flex flex-row justify-center items-center drop-shadow-md'}>
                    <img onContextMenu={e => e.preventDefault()} draggable={false} className={'h-[50px] absolute top-[10px] duration-150  pointer-events-none select-none'} src={key==currentItem?finalPots[pot]?.img:finalPots[item?.pot]?.img}></img>
                    <img onContextMenu={e => e.preventDefault()} draggable={false} className='h-[50px] opacity-0 pointer-events-none select-none' src={key==currentItem?finalPots[pot]?.img:finalPots[item?.pot]?.img}></img>
                    <img onContextMenu={e => e.preventDefault()} draggable={false} className={'w-[50px] absolute top-[-18px] duration-150  pointer-events-none select-none'} src={key==currentItem? finalCactus[cactus]?.img: finalCactus[item?.cactus]?.img}></img>
                </div>
                <p className='px-4 rounded-md font-medium text-gray-700 border-green bg-[#0001] '>
                  {key==currentItem?quantity:item.quantity}
                </p>
              </button>
              {
                  key==currentItem && cart.length>1 &&
                  <button onClick={()=>handleRemove(key)} className={'z-[0] hover:bg-dark-white2 duration-100 bg-dark-white border border-gray-400 w-8 h-8 flex justify-center items-center rounded-full p-1'}>
                    <CloseRoundedIcon sx={{color:"#444",fontSize:18}}/>
                  </button>
              }
              </div>
            )
          })
        }
      </div>
      <div className={`w-full px-4 max-w-sm flex justify-center items-center transition-all`}>
        <button onClick={handelAddNew} className='drop-shadow-lg w-full py-1 bg-green flex justify-center items-center gap-4 text-white font-semibold text-lg tracking-wider uppercase rounded-lg hover:bg-green-dark active:scale-90 transition-all'>
          {/* <AddShoppingCartIcon className="text-green scale-[150%]" /> */}
          <CartIcon width={45} height={45} target="button"/>
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  )
}

export default MarketCart;