const clienteValidator = {
    nome: {
      required: 'O campo é obrigatório!',
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    email: {
      required: 'O campo é obrigatório!',
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    cpf: {
      required: 'O campo é obrigatório!',
      minLength: {
        value: 11,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 11,
        message: "Máximo de 3 caracteres!",
      },
    },
    telefone: {
        required: 'O campo é obrigatório!'
    }

  };
  
  export default clienteValidator;
  