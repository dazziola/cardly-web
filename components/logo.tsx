import Link from "next/link"

export default function Logo({ size = "medium" }: { size: "small" | "medium" | "large" }) {
    switch (size) {
        case "small":
            return  <Link href="/"><div className="text-xl font-bold">Cardly ✅</div></Link>;
        case "medium":
            return <Link href="/"><div className="text-2xl font-bold">Cardly ✅</div></Link>;
        case "large":
            return <Link href="/"><div className="text-6xl font-bold">Cardly ✅</div></Link>;
        default:
            return <Link href="/"><div className="text-2xl font-bold">Cardly ✅</div></Link>;
    }
};
