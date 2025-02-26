interface IconProps {
  size?: number;
}

const PlusIcon = ({ size }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} fill="none" viewBox="0 0 16 16">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9 2H7v5H2v2h5v5h2V9h5V7H9z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default PlusIcon;
