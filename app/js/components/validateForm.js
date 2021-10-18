new JustValidate('.form', {
    rules: {
        email: {
            required: true, 
            email: true
        },
    },
    messages: {
        email: {
            required: '* Обязательное поле', 
            email: '* Введите корректный email'
        }
    }
})