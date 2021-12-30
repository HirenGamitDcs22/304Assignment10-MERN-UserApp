const Botton=({text,color,onClick})=>{
    return(
        <button className='btn' style={{backgroundColor: color}} onClick={onClick}>{text}</button>
    )
}
export default Botton