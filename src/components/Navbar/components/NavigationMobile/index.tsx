import { Disclosure } from '@headlessui/react';
import classnames from 'classnames';

interface INavigatonMobileProps {
  navigation: Array<{
    name: string;
    href: string;
    current: boolean;
  }>;
}

export function NavigationMobile({ navigation }: INavigatonMobileProps) {
  const isCurrentPath = (href: string) => href === window.location.pathname;

  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => (
          <Disclosure.Button
            key={item.name}
            as="a"
            href={item.href}
            className={classnames(
              item.current && isCurrentPath(item.href)
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </Disclosure.Button>
        ))}
      </div>
    </Disclosure.Panel>
  );
}
