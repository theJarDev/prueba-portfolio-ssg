import { useState } from 'react';
import Modal from './Modal';
import cv from '../assets/CV-christopher-gonzalez.pdf';

const CV = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleModal = () => {
        setIsOpen((isOpen) => !isOpen);
    }

    return (
    <>
        <button type='button' onClick={() => handleModal()} class="flex items-center font-semibold hover:text-[#ABB2BF] text-lg 2xl:text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-cv" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0"></path>
                <path d="M13 11l1.5 6l1.5 -6"></path>
            </svg>
                CV
        </button>
        {isOpen && <Modal src={cv} setIsOpen={setIsOpen} />}
    </>
    )
}

export default CV;


