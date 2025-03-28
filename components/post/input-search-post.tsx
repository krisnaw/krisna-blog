'use client'
import {Input} from "@/components/ui/input";
import {useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";

export function InputSearchPost() {
    const searchParams = useSearchParams()

    const search = searchParams.get('search') ?? ""

    const router = useRouter();
    const [searchInput, setSearchInput] = useState<string>(search)

    const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
        router.push(`/posts?search=${e.target.value}`)
    }

    return (
        <Input value={searchInput} onChange={onChangeEvent} placeholder="Search..." />
    )
}