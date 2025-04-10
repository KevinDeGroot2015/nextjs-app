import { Params } from "@/app/page"

interface BlogPostPageProps {
    blogPostid: string
    title: string
    body: string
}

export default async function BlogPostPage({ params }: { params: Params }) {
    const { id } = await params
    const blogPostData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'no-store' });
    const blogPost:BlogPostPageProps = await blogPostData.json();
    const {blogPostid, title, body} = blogPost

    return (
        <>
        <h1>Blog post</h1>
            {blogPost ? (
                <div key={blogPostid}>
                    <h2>{title}</h2>
                    <p>{body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}