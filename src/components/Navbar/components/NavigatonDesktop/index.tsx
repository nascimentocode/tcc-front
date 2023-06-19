import classnames from 'classnames';

interface INavigatonDesktopProps {
  navigation: Array<{
    name: string;
    href: string;
    current: boolean;
  }>;
}

export function NavigatonDesktop({ navigation }: INavigatonDesktopProps) {
  const isCurrentPath = (href: string) => href === window.location.pathname;

  return (
    <div className="hidden h-full items-end sm:ml-6 sm:flex">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classnames(
              item.current && isCurrentPath(item.href)
                ? 'border-b-4 border-primary'
                : 'text-gray-300 hover:border-b-4 hover:border-primary hover:text-white',
              'text-body-bold px-3 py-2 pb-4'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
