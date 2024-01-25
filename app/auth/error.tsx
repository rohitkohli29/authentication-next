'use client'
export default function ErrorBoundry({
     error, 
     reset 
    }:{
    error: Error & { digest?: string }
    reset: () => void
}){
    return (
        <div>
            <h1>{error.message}</h1>
            <button onClick={()=>reset()} className="py-2 px-3 bg-violet-600 text-white rounded">Try again</button>
        </div>
    )
}