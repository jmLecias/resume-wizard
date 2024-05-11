import React, { useState, useRef, useEffect } from 'react';

const Dropdown = ({ children, icon, title }) => {

    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, []);

    const dropdownIcon = document.querySelector(`.${title}`);
    var distanceFromRight;
    if (dropdownIcon) {
        distanceFromRight = window.innerWidth - (dropdownIcon.offsetLeft + dropdownIcon.offsetWidth);
    }
    return (
        <div>
            <div className={`header-icons ${title}`} onClick={() => { setIsOpen(!isOpen) }}>
                {icon}
            </div>
            {(isOpen) && (
                <div
                    ref={ref}
                    className='custom-dropdown box-shadow custom-scrollbar'
                    style={{
                        right: `${distanceFromRight}px`
                    }}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Dropdown;