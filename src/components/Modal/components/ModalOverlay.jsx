import React, { useEffect } from "react"


const ModalOverlay = ({ onClick }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
    }, [])
    return (
        <div className='fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-[#ffffff07] to-[#ffffff31] backdrop-blur-[5px] z-50 overflow-hidden' onClick={onClick}></div>
    )
}

export default ModalOverlay