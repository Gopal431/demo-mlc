"use server";

// const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "https://newdev.myleadingcampus.com/api";
const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "https://prod1.myleadingcampus.com/api";
/**
 * Fetch public blogs with optional pagination and tag filter.
 * @param {Object} options - Options for fetching blogs.
 * @param {number} [options.pageNumber=1] - Page number for pagination.
 * @param {number} [options.pageSize=10] - Page size for pagination.
 * @param {string} [options.tag='blog'] - Tag to filter blogs.
 * @returns {Promise<Object[]>} - List of blogs.
 */
export async function fetchPublicBlogs({ pageNumber = 1, pageSize = 10, tag } = {}) {
    try {
        let url = `${API_HOST}/blogs/public/access?pageNumber=${pageNumber}&pageSize=${pageSize}`;
        if (tag) {
            url += `&tag=${encodeURIComponent(tag)}`;
        }
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }

        return res.json();
    } catch (error) {
        return {
            ...error,
            status: "error",
        };
    }
}

export async function fetchBlogsById(id) {
    try {
        const url = `${API_HOST}/blogs/slug/${id}`;
        const res = await fetch(url, {
            next: { revalidate: 60 },
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blogs by tag: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        return {
            ...error,
            status: "error",
        };
    }
}

export async function fetchBlogsBySlug(slug) {
    try {
        const url = `${API_HOST}/blogs/slug/${slug}`;
        const res = await fetch(url, {
            next: { revalidate: 0 },
        });
console.log(res,"api",url);
        if (!res.ok) {
            throw new Error(`Failed to fetch blogs by tag: ${res.statusText}`);
        }
        return res.json();
    } catch (error) {
        return {
            ...error,
            status: "error",
        };
    }
}