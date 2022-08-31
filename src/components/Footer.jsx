import Image from "next/image";

const Footer = () => {
    return (
        <footer className="flex w-full items-center justify-center bg-neutral-200 py-3">
            <a
                href="https://github.com/ShadeDev7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1"
            >
                <div className="relative h-7 w-7">
                    <Image alt="ShadeDev7 GitHub" src="/imgs/github.svg" layout="fill" />
                </div>

                <p className="font-medium">ShadeDev7</p>
            </a>
        </footer>
    );
};

export default Footer;
