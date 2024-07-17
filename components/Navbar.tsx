import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="fixed flex justify-between items-center w-full p-4 bg-white">
            <Image src={"/images/logo.svg"} alt={"logo"} width={101} height={101} />
            <Image src={"/images/hamburger.svg"} alt={"menu"} width={101} height={101} />
        </nav>
    );
}
