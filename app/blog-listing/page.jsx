import { fetchPublicBlogs } from "@/actions/blogServices";
import { decodeAndSanitizeHtml } from "../../components/componentsForReuse/Utils/sanitizeHtml";
import Link from "next/link";

const POSTS_PER_PAGE = 9;

export default async function page({ searchParams }) {
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

    const totalPages = Math.ceil(totalPostsCount / POSTS_PER_PAGE);

    return (
        <section className="my-10 md:pt-20 bg-gray-50">
            <div className="container mx-auto px-4 text-[#141414]">
                <section className="md:h-50 h-20 flex justify-center items-center mb-4 bg-gradient-to-t from-[#622BFF] to-[#16B2D0] rounded-lg p-6">
                    <h2 className="text-3xl font-bold text-center text-white">Latest Blogs</h2>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
                    {blogPosts.map((post, index) => (
                        <Link
                            key={post.id}
                            href={`/blogview/${post.slug}`}
                            className="group block transform transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animation: "fadeInUp 0.6s ease-out forwards",
                            }}
                        >
                            <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full flex flex-col border border-gray-100 group-hover:border-indigo-200">
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={
                                            post?.imageUrl ||
                                            "/placeholder.svg?height=224&width=400&query=blog post image"
                                        }
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center text-sm text-gray-500 mb-3">
                                        <time className="font-medium">
                                            {post.publishedAt &&
                                            !isNaN(Date.parse(post.publishedAt))
                                                ? new Date(post.publishedAt).toLocaleDateString(
                                                      "en-US",
                                                      {
                                                          year: "numeric",
                                                          month: "short",
                                                          day: "numeric",
                                                      }
                                                  )
                                                : ""}
                                        </time>
                                        <span className="mx-3 w-1 h-1 bg-gray-400 rounded-full"></span>
                                        <span className="text-indigo-600 font-medium">
                                            {post.author || "Admin"}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors duration-200">
                                        {post.title}
                                    </h2>
                                    <div className="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-grow mb-4">
                                        {decodeAndSanitizeHtml(post.content).replace(
                                            /<[^>]+>/g,
                                            ""
                                        )}
                                    </div>
                                    <div className="flex items-center text-indigo-600 font-medium text-sm group-hover:text-indigo-700 transition-colors duration-200">
                                        <span>Read more</span>
                                        <svg
                                            className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </section>

                {/* Pagination */}
                {totalPages > 1 && (
                    <section className="flex justify-center items-center space-x-2">
                        <div className="flex items-center space-x-1 bg-white rounded-xl shadow-lg p-2 border border-gray-200">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                                <Link
                                    key={pageNum}
                                    href={`?page=${pageNum}`}
                                    scroll={false}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                                        currentPage === pageNum
                                            ? "bg-indigo-600 text-white shadow-md transform scale-105"
                                            : "text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                                    }`}
                                >
                                    {pageNum}
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </section>
    );
}
