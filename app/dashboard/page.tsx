'use client'
import { useSelector } from "react-redux";
import toast from 'react-hot-toast'
import { useRouter } from "next/navigation";
export default async function Dashboard() {
    const router = useRouter();
    const token = useSelector((state: any) => state.tokenSlice);

    const res = await getData(token);
    console.log(res);
    if (res.status == 200) {
        toast.success(res.message);
    } else {
        router.push('auth/login');
    }

    return (
        <>
            <h1 className="text-4xl text-center py-3 font-bold">Hello from Dashboard</h1>
        </>
    )
}

async function getData(token: any) {
    try {
        const res = await fetch('http://localhost:3000/api/dasboard', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        const data = await res.json();
        return data;
    } catch (error: any) {
        console.log(error);
        return error.message;
    }
}