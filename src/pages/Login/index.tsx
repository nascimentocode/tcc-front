import { Button } from '@/components-shared/Button';
import { Input } from '@/components-shared/Input';
import { AuthContext } from '@/contexts/AuthContext';
import { GoogleOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import image from '../../assets/login-image.png';

export function Login() {
  const navigate = useNavigate();

  const { handleSignInCredentials, handleSignInGoogle } =
    useContext(AuthContext);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('E-mail inválido.')
        .required('Preencha o E-mail.'),
      password: Yup.string().required('Preencha o Senha.')
    }),
    onSubmit(values) {
      handleSignInCredentials(values.email, values.password);
    }
  });

  const handleNavigateToSignUp = () => navigate('/cadastrar');

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
          className="flex flex-col gap-8 p-10 md:w-2/4 md:p-0"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
        >
          <h1 className="title">Login</h1>
          <Input
            label="Email"
            prepend={<MailOutlined />}
            placeholder="example@hotmail.com"
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
            prepend={<LockOutlined />}
            placeholder="********************"
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
              ENTRAR
            </Button>
            <p className="assistive-text-default">
              Não tem conta?{' '}
              <span
                className="cursor-pointer text-primary underline"
                onClick={handleNavigateToSignUp}
              >
                Registre-se
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between gap-7">
            <div className="h-[1px] w-full bg-textSecondary" />
            <p className="text-body-default">Ou</p>
            <div className="h-[1px] w-full bg-textSecondary" />
          </div>
          <Button type="button" variant="outlined" onClick={handleSignInGoogle}>
            <GoogleOutlined />
            Entre com Google
          </Button>
        </form>
      </div>
    </div>
  );
}
