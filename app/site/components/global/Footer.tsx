export default function Footer() {
  return (
    <footer className="mt-6">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-teal-900">
        <small className=" duration-200 font-mono">
          All rights reserved &copy; {new Date().getFullYear()}
        </small>

        <small className="hover:text-white duration-200">
          <a
            href="https://github.com/JessimH"
            target="_blank"
            rel="noreferrer noopener"
          >
            Prepared by Heddadi Jessim
          </a>
        </small>
      </div>
    </footer>
  );
}