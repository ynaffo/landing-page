import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 bg-[#020617] py-8 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-6">
                    <p>&copy; {new Date().getFullYear()} Nemiply. All rights reserved.</p>
                </div>
                <div className="flex items-center gap-6">
                    <Link href="/terms" className="hover:text-cyan-400 transition-colors">
                        Terms of Service
                    </Link>
                    <Link
                        href="/privacy"
                        className="hover:text-cyan-400 transition-colors"
                    >
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </footer>
    );
}
