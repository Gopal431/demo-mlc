/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.pravatar.cc", "img.freepik.com"],
    },
    env: {
        NEXT_PUBLIC_BUILD_TIME: Date.now().toString(),
    },
    headers: async () => {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "no-store",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
