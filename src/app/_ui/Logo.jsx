import { rochester } from "@/app/_utils/fonts";

export default function Logo({ size = "text-5xl mb-5" }) {
	return <h2 className={`${rochester.className} ${size}`}>Nistagram</h2>;
}
