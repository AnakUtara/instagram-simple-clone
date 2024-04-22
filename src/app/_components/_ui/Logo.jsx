import { rochester } from "@/app/_utils/fonts";

export default function Logo({ size = "text-5xl" }) {
	return <h2 className={`${rochester.className} ${size} mb-5`}>Nistagram</h2>;
}
