import { BellOutlined } from '@ant-design/icons';

export function Notifcations() {
  return (
    <button
      type="button"
      className="rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span className="sr-only">View notifications</span>
      <BellOutlined className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
