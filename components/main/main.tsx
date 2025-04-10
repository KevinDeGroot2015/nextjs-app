export default function Main({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 shadow-lg w-full min-h-screen max-w-5xl">
                {children}
            </div>
        </div>
    )
}