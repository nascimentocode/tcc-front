import { Button } from '@/components-shared/Button';
import { Input } from '@/components-shared/Input';
import { AuthContext } from '@/contexts/AuthContext';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../assets/signUp-image.png';
import { SignUpValidation } from './Validation';

export function SignUp() {
  const navigate = useNavigate();

  const { handleSignUp } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      user: '',
      email: '',
      password: ''
    },
    validationSchema: SignUpValidation,
    onSubmit(values) {
      handleSignUp(values.email, values.password);
    }
  });

  const handleNavigateToLogin = () => navigate('/login');

  return (
    <div className="flex w-full md:h-screen">
      <div
        className="hidden md:block md:w-1/2 md:bg-cover md:bg-center"
        style={{
          backgroundImage: `url(${image})`
        }}
      />
      <div className="w-full items-center justify-center md:flex md:w-1/2 md:items-center md:justify-center">
        <form
          className="flex w-full flex-col gap-8 p-10 md:w-2/3 md:p-0"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <h1 className="title">Cadastre-se</h1>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <Input
              label="Nome"
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={
                formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : ''
              }
            />
            <Input
              label="Sobrenome"
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={
                formik.touched.lastName && formik.errors.lastName
                  ? formik.errors.lastName
                  : ''
              }
            />
          </div>
          <Input
            label="Usuário"
            type="text"
            name="user"
            value={formik.values.user}
            onChange={formik.handleChange}
            error={
              formik.touched.user && formik.errors.user
                ? formik.errors.user
                : ''
            }
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ''
            }
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              formik.touched.password && formik.errors.password
                ? formik.errors.password
                : ''
            }
          />
          <div className="flex flex-col gap-3">
            <Button type="submit" full>
              CADASTRE-SE
            </Button>
            <p className="assistive-text-default text-center">
              Ja tem conta?{' '}
              <span
                className="cursor-pointer text-primary underline"
                onClick={handleNavigateToLogin}
              >
                Entre
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
