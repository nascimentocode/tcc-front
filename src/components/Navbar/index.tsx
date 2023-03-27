import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Disclosure } from '@headlessui/react';
import { NavigationMobile } from './components/NavigationMobile';
import { NavigatonDesktop } from './components/NavigatonDesktop';
import { Notifcations } from './components/Notifications';
import { ProfileDropdown } from './components/ProfileDropdown';

const navigation = [
  { name: 'Buscar Players', href: '/buscar-players', current: true }
];

export function Navbar() {
  return (
    <Disclosure as="nav" className="bg-backgroundSections">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CloseOutlined
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  ) : (
                    <MenuOutlined
                      className="block h-6 w-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex h-full flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <p>TCC</p>
                </div>

                <NavigatonDesktop navigation={navigation} />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Notifcations />

                <ProfileDropdown />
              </div>
            </div>
          </div>

          <NavigationMobile navigation={navigation} />
        </>
      )}
    </Disclosure>
  );
}
