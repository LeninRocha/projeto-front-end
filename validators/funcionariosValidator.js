const funcionariosValidator = {
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
    codigo: {
      required: 'O campo é obrigatório!',
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 3,
        message: "Máximo de 3 caracteres!",
      },
    },

  };
  
  export default funcionariosValidator;
  