const estoqueValidator = {
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
    preco: {
      required: 'O campo é obrigatório!',
      maxLength: {
        value: 100,
        message: "Máximo de 100 caracteres!",
      },
    },
    codigo: {
      
      minLength: {
        value: 3,
        message: "Mínimo de 3 caracteres!",
      },
      maxLength: {
        value: 3,
        message: "Máximo de 3 caracteres!",
      },
    },
    estoque:{
        required: 'O campo é obrigatório!',
    }

  };
  
  export default estoqueValidator;
  