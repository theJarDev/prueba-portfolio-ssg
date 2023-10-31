
const Modal = ( {src, setIsOpen} ) => {

  return (
    <div onClick={() => setIsOpen((setIsOpen) => !setIsOpen)} className="fixed z-10 inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <object className="rounded p-5 w-full h-[60%] md:w-[60%] md:h-[80%]" data={src} type="application/pdf"></object>
    </div>
  )
}

export default Modal;