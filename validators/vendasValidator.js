const funcionariosValidator = {
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
    cpf: {
        required: 'O campo é obrigatório!',
        minLength: {
          value: 11,
          message: "Mínimo de 11 caracteres!",
        },
        maxLength: {
          value: 11,
          message: "Máximo de 11 caracteres!",
        },
      },

  };
  
  export default funcionariosValidator;
  