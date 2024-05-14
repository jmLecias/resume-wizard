import { useState, useRef, useImperativeHandle } from 'react';

export const useForm = (initialValues, ref) => {
    const [input, setInput] = useState(initialValues);
    const [showValidation, setShowValidation] = useState(false);
    const buttonRef = useRef(null);
    var isFormValid = false;

    const handleChange = (event) => {
        const field = event.target.name;
        setInput((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const handleDynamicChange = (index, event) => {
        const field = event.target.name;
        const newInputs = [...input];
        newInputs[index][field] = event.target.value;
        setInput(newInputs);
    };

    const addRow = () => {
        const newRow = Object.fromEntries(
            Object.keys(input[0]).map(key => [key, ''])
        );
        setInput(prev => [...prev, newRow]);
    };
    

    const removeLast = () => {
        if(input.length > 1) {
            setInput(prev => prev.slice(0, -1));
        }
    };
    

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
            isFormValid = true;
        }
        setShowValidation(true);
    };

    useImperativeHandle(ref, () => ({
        checkValidity: () => {
            buttonRef.current.click();
            return isFormValid;
        },
        getInputs: () => {
            return input;
        }
    }));

    return {
        input, 
        setInput, 
        showValidation, 
        handleChange, 
        handleDynamicChange,
        addRow, 
        removeLast,
        handleSubmit, 
        buttonRef
    };
};
