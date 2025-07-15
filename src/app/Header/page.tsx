import Image from "next/image";

export default function Header() {
  return (
    <div className=" flex sticky top-0 z-50 justify-between items-center px-12 py-2 text-black bg-white border-b-1 border-gray-200">
      <div>
        <Image src="/logo.png" alt="SA Tech logo" width={30} height={30} />
      </div>
      <div>
        <nav>
          <ul className="flex space-x-16 text-md">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li><a href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}