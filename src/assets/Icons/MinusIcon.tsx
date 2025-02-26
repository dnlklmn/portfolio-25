interface IconProps {
  size?: number;
}

const PlusIcon = ({ size }: IconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} fill="none" viewBox="0 0 16 16">
    <path fill="currentColor" d="M14 7v2H2V7z"></path>
  </svg>
);

export default PlusIcon;
