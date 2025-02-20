import { useContext, useState } from 'react'
import { Iappointment, Iopject_Type } from '../../@types'
import Btn from '../common/Button'
import './PopUp.css'
import { AppContext } from '../../store'
import actions from '../../store/actions'
import { IoCloseSharp } from "react-icons/io5";
import doctorIcon  from '../../assets/doctor-icon.jpg'
interface IpopUp{
  data:Iappointment
  handleOpenPopUp:()=>void,isOben:boolean,typeOfPopUp:string}

const PopUp = ({data, handleOpenPopUp,isOben,typeOfPopUp}:IpopUp) => {
  const [newAppointment,setNewAppointment]=useState<Iappointment>(data)
    const {dispatch} =useContext(AppContext); 
    const handleChangeValue=(name:string,value:string)=>{
   //   newAppointment[name as keyof typeof data]=value;
      setNewAppointment(newAppointment)

    }
    console.log(newAppointment)
  return (
    <section className={`pop-up popUp-display-${isOben}`}>

       <section className='title-appointment'>
          <h2>Appointment Detail
          </h2>
          <IoCloseSharp onClick={handleOpenPopUp} size={30}/>
        </section>


  <h2>
  <img src={doctorIcon} width={'60px'}  height={'60px'} style={{borderRadius:'50%' ,margin:'auto'}}/>
  </h2>
    <section className='detailes-appointment'>
      <section>
      <h2>name:<mark>{data.fullName}</mark></h2>
      <h2>age:<mark>{data.age}</mark></h2>
    </section>
    <section>
      <h2>gander:<mark>{data.gander}</mark></h2>
      <h2>moblie:<mark>{data.mobileNumber}</mark></h2>

    </section>
    <section>
      <h2>status:<mark>{data.status}</mark></h2>
      <h2>time:<mark>{data.time}</mark></h2>
      
    </section>
  </section>
  </section>


  )
}


export default PopUp;



/*    {typeOfPopUp==='edit'?
        <form onSubmit={()=>dispatch(actions.editeAppointment(newAppointment))}>
          
          {Object.values(newAppointment).map(item=>data.status===item?<select>
{            ['panding','completed'].map(op=><option>{op}</option>)
}
          </select>: <input value={item} onChange={(e)=>handleChangeValue(item,e.target.value)}/>)}
          <Btn type={'submit'} name={'edit appointment'} />
        </form>*/