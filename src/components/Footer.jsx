export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 border-top">
      <div className="text-center p-3 w-100">
        &copy; {new Date().getFullYear()} Mohamed Gad | All rights reserved
      </div>
    </footer>
  );
}
