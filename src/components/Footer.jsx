import Image from "next/image";

const Footer = () => {
    return (
        <footer className="py-3 w-full bg-neutral-200 flex items-center justify-center">
            <a
                href="https://github.com/ShadeDev7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
            >
                <div className="w-7 h-7 relative">
                    <Image alt="ShadeDev7 GitHub" src="/imgs/github.svg" layout="fill" />
                </div>

                <p className="font-medium">ShadeDev7</p>
            </a>
        </footer>
    );
};

export default Footer;
