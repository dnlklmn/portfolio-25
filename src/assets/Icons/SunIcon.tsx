interface IconProps {
  size?: number;
}

const SunIcon = ({ size }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M8 2h1v1H8zM14 8v1h-1V8zM4 7v1H3V7zM7 12h1v1H7zM8 3h1v1H8zM13 8v1h-1V8zM3 7v1H2V7zM7 13h1v1H7zM7 5h2v1H7zM7 10h2v1H7zM5 7h1v2H5zM10 7h1v2h-1zM11 5h1v1h-1zM10 12h1v-1h-1zM6 4H5v1h1zM5 11H4v-1h1zM12 4h1v1h-1zM11 13h1v-1h-1zM5 3H4v1h1zM4 12H3v-1h1zM6 6h1v1H6zM6 9h1v1H6zM9 9h1v1H9zM9 6h1v1H9z"
    ></path>
  </svg>
);

export default SunIcon;
