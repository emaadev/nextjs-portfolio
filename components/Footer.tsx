const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 ">
      <small className="mb-2 text-xs">&copy; 2024 - Emanuel Nuñez</small>

      <p className="text-xs">
        <span>
          Built with Next.js (App Router & Server Actions), TypeScript, Tailwind
          CSS, Framer Motion & Resend.
        </span>
      </p>

      <a
        href="https://github.com/emaadev/nextjs-portfolio"
        target="_blank"
        rel="noreferrer"
        className="text-xs underline"
      >
        See the code of this portfolio here.
      </a>
    </footer>
  );
};

export default Footer;
