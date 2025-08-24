// "use client";

// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Alert, AlertDescription } from "@/components/ui/alert";

// import { MdMail, MdClose } from "react-icons/md";
// import { FaCheck, FaArrowLeft } from "react-icons/fa";

// import Link from "next/link";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { unsubscribeEmail } from "@/actions/subscription";

// export default function UnsubscribeForm({ email: defaultEmail }) {
//     const [email, setEmail] = useState(defaultEmail || "");
//     const [isLoading, setIsLoading] = useState(false);
//     const [status, setStatus] = useState(null); // 'success', 'error', or null
//     const [message, setMessage] = useState("");

//     const handleUnsubscribe = async (e) => {
//         try {
//             e.preventDefault();

//             if (!email) {
//                 setStatus("error");
//                 setMessage("Please enter your email address");
//                 return;
//             }
//             const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/.test(email);
//             if (!isValidEmail) {
//                 setStatus("error");
//                 setMessage("Please enter a valid email address");
//                 return;
//             }

//             setIsLoading(true);
//             setStatus(null);

//             const result = await unsubscribeEmail(email);

//             if (!result.success) {
//                 throw new Error(result.message);
//             }

//             setStatus("success");
//             setMessage(
//                 result.message || "You have been successfully unsubscribed from our mailing list."
//             );
//             setEmail("");
//         } catch (error) {
//             setStatus("error");
//             setMessage("Something went wrong. Please try again or contact support.");
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 pt-[100px] sm:px-6 lg:px-8">
//             <div className="max-w-md mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-8">
//                     <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
//                         <MdMail className="w-8 h-8 text-red-600" />
//                     </div>
//                     <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
//                         Unsubscribe
//                     </h1>
//                     <p className="text-gray-800 text-sm sm:text-base">
//                         We're sorry to see you go. Enter your email below to unsubscribe from our
//                         mailing list.
//                     </p>
//                 </div>

//                 {/* Main Card */}
//                 <Card className="shadow-lg border-0">
//                     <CardHeader className="text-center pb-4">
//                         <CardTitle className="text-lg text-gray-600 font-semibold">
//                             Confirm Unsubscription
//                         </CardTitle>
//                         <CardDescription className="text-sm text-gray-600">
//                             This action will remove you from all our email communications
//                         </CardDescription>
//                     </CardHeader>

//                     <CardContent className="space-y-6">
//                         {/* Status Messages */}
//                         {status === "success" && (
//                             <Alert className="border-green-200 bg-green-50">
//                                 <FaCheck className="h-4 w-4 text-green-600" />
//                                 <AlertDescription className="text-green-800">
//                                     {message}
//                                 </AlertDescription>
//                             </Alert>
//                         )}

//                         {status === "error" && (
//                             <Alert className="border-red-200 bg-red-50">
//                                 <AlertDescription className="text-red-800">
//                                     {message}
//                                 </AlertDescription>
//                             </Alert>
//                         )}

//                         {/* Form */}
//                         {status !== "success" && (
//                             <form onSubmit={handleUnsubscribe} className="space-y-4">
//                                 <div className="space-y-2">
//                                     <Input
//                                         id="email"
//                                         type="email"
//                                         placeholder="Enter your email address"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         className="w-full"
//                                         required
//                                         disabled={defaultEmail || isLoading}
//                                     />
//                                 </div>

//                                 <Button
//                                     type="submit"
//                                     className={`w-full bg-gradient-to-r from-[#622BFF] to-[#16B2D0] text-white cursor-pointer ${
//                                         isLoading ? "cursor-progress" : ""
//                                     }`}
//                                     disabled={isLoading}
//                                 >
//                                     {isLoading ? (
//                                         <div className="flex items-center justify-center">
//                                             <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                                             Processing...
//                                         </div>
//                                     ) : (
//                                         "Unsubscribe"
//                                     )}
//                                 </Button>
//                             </form>
//                         )}

//                         {/* Success Actions */}
//                         {status === "success" && (
//                             <div className="space-y-3">
//                                 <Button
//                                     variant="outline"
//                                     className={`w-full bg-gradient-to-r from-[#622BFF] to-[#16B2D0] text-white cursor-pointer py-5 ${
//                                         isLoading ? "cursor-progress" : ""
//                                     }`}
//                                 >
//                                     <Link
//                                         href="/"
//                                         className="flex items-center justify-center gap-1"
//                                     >
//                                         <FaArrowLeft className="w-4 h-4 mr-2" />
//                                         Return to Homepage
//                                     </Link>
//                                 </Button>
//                             </div>
//                         )}

//                         {/* Additional Info */}
//                         <div className="pt-4 border-t border-gray-200">
//                             <div className="text-xs text-gray-500 space-y-2">
//                                 <p>
//                                     <strong>Note:</strong> It may take up to 48 hours to process
//                                     your unsubscription request.
//                                 </p>
//                                 <p>
//                                     You may still receive transactional emails related to your
//                                     account or recent purchases.
//                                 </p>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Footer Links */}
//                 <div className="mt-8 text-center space-y-2">
//                     <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
//                         <Link
//                             href="/privacy"
//                             className="text-gray-600 hover:text-gray-900 transition-colors"
//                         >
//                             Privacy Policy
//                         </Link>
//                         <span className="hidden sm:inline text-gray-400">•</span>
//                         <Link
//                             href="/contact"
//                             className="text-gray-600 hover:text-gray-900 transition-colors"
//                         >
//                             Contact Support
//                         </Link>
//                         <span className="hidden sm:inline text-gray-400">•</span>
//                         <Link
//                             href="/"
//                             className="text-gray-600 hover:text-gray-900 transition-colors"
//                         >
//                             Back to Home
//                         </Link>
//                     </div>

//                     {/* <p className="text-xs text-gray-500 mt-4">
//                         Changed your mind? You can always{" "}
//                         <Link
//                             href="/subscribe"
//                             className="text-blue-600 hover:text-blue-800 underline"
//                         >
//                             resubscribe
//                         </Link>{" "}
//                         later.
//                     </p> */}
//                 </div>
//             </div>
//         </div>
//     );
// }

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MdMail } from "react-icons/md";
import { FaCheck, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { unsubscribeEmail } from "@/actions/subscription";

const UNSUBSCRIBE_REASONS = [
    { value: "too-many-emails", label: "Too many emails" },
    { value: "not-relevant", label: "Content is not relevant to me" },
    { value: "never-signed-up", label: "I never signed up for this" },
    { value: "temporary-break", label: "Taking a temporary break" },
    { value: "privacy-concerns", label: "Privacy concerns" },
    { value: "found-alternative", label: "Found a better alternative" },
    { value: "other", label: "Other reason" },
];

export default function UnsubscribeForm({ email: defaultEmail }) {
    const [email, setEmail] = useState(defaultEmail || "");
    const [selectedReason, setSelectedReason] = useState("");
    const [otherReason, setOtherReason] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // 'success', 'error', or null
    const [message, setMessage] = useState("");

    const handleUnsubscribe = async (e) => {
        try {
            e.preventDefault();

            if (!email) {
                setStatus("error");
                setMessage("Please enter your email address");
                return;
            }

            const isValidEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,10}$/.test(email);
            if (!isValidEmail) {
                setStatus("error");
                setMessage("Please enter a valid email address");
                return;
            }

            if (!selectedReason) {
                setStatus("error");
                setMessage("Please select a reason for unsubscribing");
                return;
            }

            if (selectedReason === "other" && !otherReason.trim()) {
                setStatus("error");
                setMessage("Please specify your reason for unsubscribing");
                return;
            }

            setIsLoading(true);
            setStatus(null);

            const reasonText =
                selectedReason === "other"
                    ? otherReason
                    : UNSUBSCRIBE_REASONS.find((r) => r.value === selectedReason)?.label;

            const result = await unsubscribeEmail(email, reasonText);
            console.log(result);

            if (!result.success) {
                throw new Error(result.message);
            }

            setStatus("success");
            setMessage(
                result.message || "You have been successfully unsubscribed from our mailing list."
            );
            setEmail("");
            setSelectedReason("");
            setOtherReason("");
        } catch (error) {
            setStatus("error");
            setMessage("Something went wrong. Please try again or contact support.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 pt-[100px] sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
                {/* Main Card */}
                <Card className="shadow-lg border-0">
                    <CardHeader className="text-center pb-4">
                        <CardTitle className="text-lg text-gray-600 font-semibold">
                            Confirm Unsubscription
                        </CardTitle>
                        <CardDescription className="text-sm text-gray-600">
                            This action will remove you from all our email communications
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        {/* Status Messages */}
                        {status === "success" && (
                            <Alert className="border-green-200 bg-green-50">
                                <FaCheck className="h-4 w-4 text-green-600" />
                                <AlertDescription className="text-green-800">
                                    {message}
                                </AlertDescription>
                            </Alert>
                        )}

                        {status === "error" && (
                            <Alert className="border-red-200 bg-red-50">
                                <AlertDescription className="text-red-800">
                                    {message}
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Form */}
                        {status !== "success" && (
                            <form onSubmit={handleUnsubscribe} className="space-y-6">
                                {/* Email Input */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-sm font-bold text-gray-700 "
                                    >
                                        Email Address
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full text-black disabled:opacity-100"
                                        required
                                        disabled={defaultEmail || isLoading}
                                    />
                                </div>

                                {/* Reason Selection */}
                                <div className="space-y-3">
                                    <Label className="text-sm font-bold text-gray-700">
                                        Why are you unsubscribing?{" "}
                                        <span className="text-red-500">*</span>
                                    </Label>
                                    <RadioGroup
                                        value={selectedReason}
                                        onValueChange={setSelectedReason}
                                        className="space-y-2"
                                        disabled={isLoading}
                                    >
                                        {UNSUBSCRIBE_REASONS.map((reason) => (
                                            <div
                                                key={reason.value}
                                                className="flex items-center space-x-2"
                                            >
                                                <RadioGroupItem
                                                    value={reason.value}
                                                    id={reason.value}
                                                    disabled={isLoading}
                                                />
                                                <Label
                                                    htmlFor={reason.value}
                                                    className="text-sm text-gray-600 cursor-pointer"
                                                >
                                                    {reason.label}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                </div>

                                {/* Other Reason Textarea */}
                                {selectedReason === "other" && (
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="other-reason"
                                            className="text-sm font-medium text-gray-700"
                                        >
                                            Please specify your reason
                                        </Label>
                                        <Textarea
                                            id="other-reason"
                                            placeholder="Tell us more about why you're unsubscribing..."
                                            value={otherReason}
                                            onChange={(e) => setOtherReason(e.target.value)}
                                            className="w-full min-h-[80px] resize-none"
                                            disabled={isLoading}
                                            maxLength={500}
                                        />
                                        <p className="text-xs text-gray-500">
                                            {otherReason.length}/500 characters
                                        </p>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className={`w-full bg-gradient-to-r from-[#622BFF] to-[#16B2D0] text-white cursor-pointer ${
                                        isLoading ? "cursor-progress" : ""
                                    }`}
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Processing...
                                        </div>
                                    ) : (
                                        "Unsubscribe"
                                    )}
                                </Button>
                            </form>
                        )}

                        {/* Success Actions */}
                        {status === "success" && (
                            <div className="space-y-3">
                                <Button
                                    variant="outline"
                                    className={`w-full bg-gradient-to-r from-[#622BFF] to-[#16B2D0] text-white cursor-pointer py-5 ${
                                        isLoading ? "cursor-progress" : ""
                                    }`}
                                >
                                    <Link
                                        href="/"
                                        className="flex items-center justify-center gap-1"
                                    >
                                        <FaArrowLeft className="w-4 h-4 mr-2" />
                                        Return to Homepage
                                    </Link>
                                </Button>
                            </div>
                        )}

                        {/* Additional Info */}
                        <div className="pt-4 border-t border-gray-200">
                            <div className="text-xs text-gray-500 space-y-2">
                                <p>
                                    <strong>Note:</strong> It may take up to 48 hours to process
                                    your unsubscription request.
                                </p>
                                <p>
                                    You may still receive transactional emails related to your
                                    account or recent purchases.
                                </p>
                                {status !== "success" && (
                                    <p>
                                        <strong>Your feedback matters:</strong> We use unsubscribe
                                        reasons to improve our email content and frequency.
                                    </p>
                                )}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Footer Links */}
                <div className="mt-8 text-center space-y-2">
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm">
                        <Link
                            href="/privacy"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <span className="hidden sm:inline text-gray-400">•</span>
                        <Link
                            href="/contact"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Contact Support
                        </Link>
                        <span className="hidden sm:inline text-gray-400">•</span>
                        <Link
                            href="/"
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
