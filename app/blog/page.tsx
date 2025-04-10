import Link from "next/link";

interface BlogPost {
    id: number;
    title: string;
    body: string;
}

export default async function BlogPage() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, { cache: 'no-store' });
    const blogPosts = await res.json();

    return (
        <main className="p-4">
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            {blogPosts.length > 0 ? (
                <div className="space-y-4">
                    {blogPosts.map((post:BlogPost) => (
                        <Link href={`/blog/${post.id}`} key={post.id}>
                            <div className="p-4 border rounded-lg hover:bg-gray-100 transition">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="text-sm text-gray-600">{post.body}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <p>Loading or failed to load posts.</p>
            )}
        </main>
    );
}
