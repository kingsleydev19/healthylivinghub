import { fbEvent } from "../facebookevent";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  pixelValue?: number;
  pixelSource?: string;
  href?: string;
  newTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className = "bg-teal-500 text-white px-6 py-3 rounded-lg",
  children,
  pixelValue = 0,
  pixelSource = "landing_page_cta",
  href,
  newTab,
}) => {
  const handleClick = () => {
    fbEvent("Lead", {
      value: pixelValue,
      currency: "USD",
      source: pixelSource,
    });
    if (href) {
      if (newTab) window.open(href, "_blank");
      else window.location.href = href;
    }
  };

  return (
    <button onClick={handleClick} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
