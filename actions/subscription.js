"use server";

const API_HOST = "https://newdev.myleadingcampus.com/api";

export const unsubscribeEmail = async (email, reasonText) => {
    try {
        const response = await fetch(`${API_HOST}/email/unsubscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ channel: "email", contactInfo: email, reason: reasonText }),
            cache: "no-store",
        });
        const result = await response.json();

        if (!result.success) {
            throw new Error(result.message);
        }

        return {
            success: true,
            message: "You have been successfully unsubscribed from our mailing list.",
        };
    } catch (error) {
        console.log(error);

        return {
            success: false,
            message: error.message || "Something went wrong!",
        };
    }
};

export const getEmailByHashId = async (hashId) => {
    try {
        const response = await fetch(`${API_HOST}/email/bithash/${hashId}`, {
            cache: "no-store",
        });
        const result = await response.json();
        return result;
    } catch (error) {
        return { status: "error", message: error.message || "Something went wrong!" };
    }
};
