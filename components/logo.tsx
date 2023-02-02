import Link from "next/link"

export default function Logo({ size = "medium" }: { size: "small" | "medium" | "large" }) {
    switch (size) {
        case "small":
            return  <Link href="/"><div className="text-xl font-bold">App 👻</div></Link>;
        case "medium":
            return <Link href="/"><div className="text-2xl font-bold">App 👻</div></Link>;
        case "large":
            return <Link href="/"><div className="text-6xl font-bold">App 👻</div></Link>;
        default:
            return <Link href="/"><div className="text-2xl font-bold">App 👻</div></Link>;
    }
};
