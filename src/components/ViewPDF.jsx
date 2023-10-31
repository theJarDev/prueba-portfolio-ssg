import { useState } from 'react'
import Modal from './Modal';

const ViewPDF = ( {src} ) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <button onClick={() => setIsOpen((isOpen) => !isOpen)} className="w-fit ml-4 mb-4 border-[1px] border-[#C778DD] pt-2 pb-2 pl-4 pr-4 live" type="button">View PDF</button>
        {isOpen && <Modal src={src} setIsOpen={setIsOpen} />}
    </>
    )
}

export default ViewPDF;