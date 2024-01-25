export default async function DashboardPage({ params }: { params: any }) {

    return (
        <div>
            <h1>Dashboard Page {decodeURIComponent(params.username)}</h1>
        </div>
    )
}