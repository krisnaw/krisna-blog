"use client";
import {useTheme} from "next-themes";
import {useMemo} from "react";
import Link from "next/link";

export function Logo() {
    const {theme} = useTheme();

    // Use useMemo to derive logo path from theme
    const logoPath = useMemo(() => {
        return theme === "light"
            ? "/images/logo-dark.svg"
            : "/images/logo-white.svg";
    }, [theme]);

    return (
        <Link href="/" className="inline-flex">
            <img
                src={logoPath}
                alt="Logo"
                width={32}
                height={32}
                aria-label="Homepage"
            />
        </Link>
    );
}