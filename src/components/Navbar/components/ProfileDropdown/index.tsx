import { AuthContext } from '@/contexts/AuthContext';
import { Menu, Transition } from '@headlessui/react';
import classnames from 'classnames';
import { Fragment, useContext } from 'react';
import noPhoto from '../../../../assets/noPhoto-image.png';

export function ProfileDropdown() {
  const { handleLogout, currentUser } = useContext(AuthContext);

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">Open user menu</span>
          {currentUser?.profileImage ? (
            <img
              className="h-8 w-8 rounded-full"
              src={currentUser.profileImage}
              alt=""
            />
          ) : (
            <img className="h-8 w-8 rounded-full" src={noPhoto} alt="" />
          )}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right overflow-hidden rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleLogout}
                className={classnames(
                  'block w-full px-4 py-2 text-sm text-textPrimary',
                  active && 'bg-gray-600'
                )}
              >
                Sair
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
