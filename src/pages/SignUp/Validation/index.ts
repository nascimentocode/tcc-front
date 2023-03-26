import * as Yup from 'yup';

const SignUpValidation = Yup.object({
  name: Yup.string().required('Preencha o Nome.'),
  lastName: Yup.string().required('Preencha o Sobrenome.'),
  user: Yup.string().required('Preencha o Usuário.'),
  email: Yup.string().email('E-mail inválido.').required('Preencha o E-mail.'),
  password: Yup.string()
    .required('Preencha o Senha.')
    .min(8, 'Mínimo de 8 caracteres.')
});

export { SignUpValidation };
