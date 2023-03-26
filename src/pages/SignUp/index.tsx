import { Button } from '@/components-shared/Button';
import { Input } from '@/components-shared/Input';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import image from '../../assets/signUp-image.png';

export function SignUp() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      user: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      user: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required()
    }),
    onSubmit() {}
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
        >
          <h1 className="title">Cadastre-se</h1>
          <div className="flex justify-between gap-6">
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
            label="Usuario"
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
