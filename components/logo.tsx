"use client";
import {useTheme} from "next-themes";
import Link from "next/link";
import Image from "next/image";

export function Logo() {
    const { resolvedTheme } = useTheme();

    return (
        <Link href="/" className="inline-flex">
            {resolvedTheme === "dark" ? (
                <Image
                    src="/images/logo-white.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                    aria-label="Homepage"
                    priority
                />
            ) : (
                <Image
                    src="/images/logo-dark.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                    aria-label="Homepage"
                    priority
                />
            )}
        </Link>
    );
}