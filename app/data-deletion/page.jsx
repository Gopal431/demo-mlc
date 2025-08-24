

export default function Home() {


  return (
    <article className="max-w-3xl w-full bg-white shadow-md rounded-xl p-6 md:p-10 mx-auto mt-28 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-blue-700">Data Deletion Policy</h1>

        <p className="mb-4 text-gray-700">
          We respect your privacy and are committed to giving you full control over your data.
          <strong> MyLeadingCampus</strong> does not store personal data of users who interact via WhatsApp or Facebook.
        </p>

        <p className="mb-4 text-gray-700">
          If you would like to request the deletion of any data related to your usage, please contact us at:
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How to Request Data Deletion?</h2>
        <p className="mb-4 text-gray-700">
          We will review and fulfil your request in accordance with our privacy policy.
        </p>

        <p className="mb-4 text-gray-700">
          You can request deletion of any data related to your usage or your personal information by:
        </p>

         <h3 className="text-lg font-extrabold text-gray-800">Contacting Us</h3>
            <p className="mt-1 ml-4 text-gray-700">
              Send an email to <a href="mailto:support@myleadingcampus.com" className="text-blue-600 underline">support@myleadingcampus.com</a>{' '}
              with the subject line <strong>“Delete My Data”</strong>. <br />
              Please include:
            </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Your registered email address or username</li>
                <li>A brief message confirming you want your data removed</li>
              </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">What Happens After You Request Deletion?</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>We will verify your identity to prevent unauthorized deletion.</li>
          <li>Your account and all associated personal data will be <strong>permanently deleted</strong> from our system within <strong>7-14 business days</strong>.</li>
          <li>Some anonymized or legally required records may be retained (for fraud prevention, tax/legal compliance, etc.), as per applicable law.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Important Notes:</h2>
        <ul className="list-disc pl-6 space-y-2 ">
          <li className='text-gray-700'><strong>Data deletion is irreversible.</strong> Once deleted, your account and all data cannot be recovered.</li>
          <li className='text-gray-700'>If you're subscribed to any services or newsletters, they will be automatically cancelled.</li>
        </ul>

        <p className="mt-6 text-gray-700">
          If you have any questions or concerns, feel free to reach out to us at{' '}
          <a href="mailto:support@myleadingcampus.com" className="text-blue-600 underline">
            support@myleadingcampus.com
          </a>.
        </p>
      </article>
  );
}
