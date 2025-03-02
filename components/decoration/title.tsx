import Image from "next/image";

export function DecorationTitle() {
    return (
        <div className="flex justify-center items-center">
            <Image src={"/ereemby.png"} alt="logo" width={32} height={32} />
            <p className="ml-2">Ereemby</p>
        </div>
    );
}
