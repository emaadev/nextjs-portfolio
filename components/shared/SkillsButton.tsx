"use client";

export interface SkillsButtonProps {
  id: string;
  active: string;
  setActive: (id: string) => void;
  className?: string;
  children: React.ReactNode;
}

const SkillsButton = ({
  active,
  setActive,
  id,
  className,
  children,
}: SkillsButtonProps) => {
  const handleProjects = (id: string) => {
    setActive(id);
  };

  return (
    <button
      className={`flex gap-2 items-center justify-between relative rounded-full py-2 px-6 transition cursor-pointer ${
        active === id
          ? "bg-gray-600 text-white"
          : "bg-transparent text-gray-600 hover:bg-gray-200"
      }
      ${className}`}
      onClick={() => handleProjects(id)}
    >
      {children}
    </button>
  );
};

export default SkillsButton;
