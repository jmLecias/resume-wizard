class ValidationService {
    validateForm(input, validationRules, setErrors){
        let errors = {};

        for (const fieldName in validationRules) {
            const value = input[fieldName];
            const rules = validationRules[fieldName];

            for (const rule of rules) {
                const [validationType, errorMessage] = rule;

                switch (validationType) {
                    case 'required':
                        if (!value.trim()) {
                            errors[fieldName] = errorMessage;
                        }
                        break;
                    case 'email':
                        if (value.trim()) {
                            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\w+$/;
                            if (!emailRegex.test(value)) {
                                errors[fieldName] = errorMessage;
                            }
                        }
                        break;
                    case 'password':
                        if (value.trim()) {
                            if (value.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                                errors[fieldName] = errorMessage;
                            }
                        }
                        break;
                    case 'match':
                        const matchField = rule[2];
                        if (input[matchField] !== value) {
                            errors[fieldName] = errorMessage;
                        }
                        break;
                    default:
                        break;
                }
            }
        }

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

}

export default ValidationService;