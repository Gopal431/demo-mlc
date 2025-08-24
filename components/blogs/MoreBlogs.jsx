import { fetchPublicBlogs } from "@/actions/blogServices";
import { decodeAndSanitizeHtml } from "../../components/componentsForReuse/Utils/sanitizeHtml";
import Link from "next/link";

const POSTS_PER_PAGE = 3;

export default async function MoreBlogs({ searchParams }) {
    const SEARCH_PARAMS = await searchParams;
    const currentPage = parseInt(SEARCH_PARAMS?.page) || 1;

    const data = await fetchPublicBlogs({
        pageNumber: currentPage,
        pageSize: POSTS_PER_PAGE,
    });

    if (data.status === "error") {
        return (
            <div className="flex justify-center items-center h-screen text-2xl font-bold text-red-500">
                {data.message || "Something went wrong!"}
            </div>
        );
    }

    let blogPosts = [];
    let totalPostsCount = 0;

    if (Array.isArray(data)) {
        blogPosts = data;
        totalPostsCount = data.length;
    } else if (Array.isArray(data.rows)) {
        blogPosts = data.rows;
        totalPostsCount = data.count || data.rows.length;
    } else if (Array.isArray(data.data)) {
        blogPosts = data.data;
        totalPostsCount = data.count || data.data.length;
    }

    return (
        <section className=" pb-10">
            <div className="container mx-auto px-4 text-[#141414]">
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.id}
                            href={`/blogview/${post.slug}`}
                            className="transition-transform transform hover:-translate-y-1.5"
                        >
                            <div className="rounded-2xl shadow-md bg-white overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 h-[520px]">
                                <div className="h-[220px] overflow-hidden p-3">
                                    <img
                                        src={post?.imageUrl || "/placeholder.svg"}
                                        alt={post.title}
                                        className="w-full h-full object-cover rounded-xl border border-gray-200"
                                    />
                                </div>

                                <div className="p-5 flex flex-col flex-grow">
                                    <ul className="flex text-sm text-gray-500 font-medium mb-2 items-center">
                                        <li>
                                            {post.publishedAt &&
                                            !isNaN(Date.parse(post.publishedAt))
                                                ? new Date(post.publishedAt)
                                                      .toISOString()
                                                      .slice(0, 10)
                                                : ""}
                                        </li>
                                        <li className="mx-2 w-[4px] h-[4px] bg-gray-400 rounded-full" />
                                        <li>{post.author || "Admin"}</li>
                                    </ul>

                                    <h4 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                                        {post.title}
                                    </h4>

                                    <div className="text-sm text-gray-600 max-w-none overflow-hidden line-clamp-5 flex-grow">
                                        {decodeAndSanitizeHtml(post.content).replace(
                                            /<[^>]+>/g,
                                            ""
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </section>
            </div>
        </section>
    );
}
