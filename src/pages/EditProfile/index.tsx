import noPhoto from '@/assets/noPhoto-image.png';
import { Button } from '@/components-shared/Button';
import { Input } from '@/components-shared/Input';
import { ToastError } from '@/components-shared/Toast/ToastError';
import { ToastSuccess } from '@/components-shared/Toast/ToastSuccess';
import { AuthContext } from '@/contexts/AuthContext';
import { db } from '@/firebase';
import { checkImageSize } from '@/utils/checkImageSize';
import { convertBase64 } from '@/utils/convertBase64';
import { DeleteOutlined } from '@ant-design/icons';
import { doc, setDoc } from 'firebase/firestore';
import { useFormik } from 'formik';
import { useContext } from 'react';
import * as Yup from 'yup';

export function EditProfile() {
  const { currentUser } = useContext(AuthContext);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      userName: currentUser?.userName ?? '',
      profileImage: currentUser?.profileImage ?? null
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Preencha o nome de usuario.')
    }),
    onSubmit: handleSubmit
  });

  async function handleSubmit() {
    try {
      const docRef = doc(
        db,
        'users',
        currentUser?.uid ?? '',
        'user_infos',
        'data'
      );

      await setDoc(
        docRef,
        {
          userName: formik.values.userName,
          profileImage: formik.values.profileImage,
          updatedAt: new Date().toISOString()
        },
        {
          merge: true
        }
      );

      ToastSuccess('Seus dados de perfil foram atualizados com sucesso!');
    } catch (error) {}
  }

  const handleChangeProfileImage = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      try {
        await checkImageSize(file);
        const base64 = await convertBase64(file);
        formik.setFieldValue('profileImage', base64);

        ToastSuccess('A imagem foi carregada com sucesso!');
      } catch (error) {
        ToastError(`${error}`);
      }
    }
  };

  const handleClearProfileImage = () => {
    formik.setFieldValue('profileImage', null);
  };

  return (
    <div className="container h-auto p-7">
      <form
        onSubmit={formik.handleSubmit}
        className="flex h-full w-full flex-col gap-3 rounded-md bg-backgroundSections p-4"
      >
        <p className="heading-h1">Meus dados</p>
        <div className="h-[1px] w-full bg-textSecondary" />

        <div className="flex flex-col items-end gap-4 sm:flex-row">
          <div className="flex w-full items-center justify-center gap-3 sm:w-1/5 sm:justify-center">
            <div className="relative">
              <img
                src={formik.values.profileImage || noPhoto}
                alt="profileImage"
                className="h-40  rounded-full sm:h-full"
              />
              {formik.values.profileImage && (
                <button
                  className="absolute right-5 bottom-0 flex h-8 w-8 items-center justify-center rounded-full bg-secondary  "
                  onClick={handleClearProfileImage}
                >
                  <DeleteOutlined />
                </button>
              )}
            </div>
          </div>
          <div className="w-full">
            <div className="w-full md:w-1/2">
              <Input
                type="file"
                accept="image/*"
                onChange={handleChangeProfileImage}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-3">
            <div className="w-full md:flex-1">
              <Input label="E-mail" value={currentUser?.email} disabled />
            </div>

            <div className="w-full md:flex-1">
              <Input label="Nome" value={currentUser?.name} disabled />
            </div>
          </div>

          <Input
            name="userName"
            label="Nome de usuario"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={
              formik.touched.userName && formik.errors.userName
                ? formik.errors.userName
                : ''
            }
          />
        </div>

        <div className="flex w-full justify-end">
          <Button type="submit">SALVAR</Button>
        </div>
      </form>
    </div>
  );
}
