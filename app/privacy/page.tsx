export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-gray-300 py-20 px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">PRIVACY POLICY</h1>
                <p className="text-sm text-gray-500">Last updated: January 2026</p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        1. Information We Collect
                    </h2>
                    <p>
                        We collect only the minimum data necessary to operate the Service.
                    </p>
                    <div className="ml-4 space-y-2">
                        <h3 className="text-xl font-medium text-white">
                            a. Account Information
                        </h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Connected social media account identifiers</li>
                            <li>Authentication tokens provided by the platform</li>
                        </ul>

                        <h3 className="text-xl font-medium text-white">
                            b. Public Content
                        </h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Public comments on content owned by the connected account</li>
                            <li>
                                Comment text and basic public identifiers (such as usernames or
                                IDs where available)
                            </li>
                        </ul>

                        <h3 className="text-xl font-medium text-white">
                            c. User-Provided Data
                        </h3>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>
                                Any information manually submitted by the user (e.g.,
                                configuration settings or uploaded lists)
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        2. How We Use Information
                    </h2>
                    <p>We use collected information to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Analyze and categorize comments</li>
                        <li>Identify potential fans or leads based on public engagement</li>
                        <li>Generate AI-assisted comment suggestions</li>
                        <li>Provide analytics and insights to the user</li>
                    </ul>
                    <p>
                        We do not access private messages, private profiles, or restricted
                        platform data.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">3. Data Sharing</h2>
                    <p>We do not sell or rent personal data.</p>
                    <p>Data may be shared only with:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            AI service providers for processing text (without training their
                            models on your data)
                        </li>
                        <li>Infrastructure providers necessary to operate the Service</li>
                        <li>Authorities if required by law</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        4. Automation Transparency
                    </h2>
                    <p>Any automated actions performed by the Service are:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Initiated or configured by the user</li>
                        <li>Subject to usage limits</li>
                        <li>Designed to comply with platform rules</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        5. Data Retention
                    </h2>
                    <p>
                        We retain data only for as long as necessary to provide the Service.
                        Users may request deletion of their data at any time.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        6. Data Security
                    </h2>
                    <p>
                        We implement reasonable technical and organizational measures to
                        protect data against unauthorized access, loss, or misuse.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">7. User Rights</h2>
                    <p>Users may:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Request access to their data</li>
                        <li>Request correction or deletion</li>
                        <li>Disconnect their accounts at any time</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        8. Changes to This Policy
                    </h2>
                    <p>
                        This Privacy Policy may be updated as the Service evolves. Continued
                        use of the Service constitutes acceptance of the updated policy.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">9. Contact</h2>
                    <p>For privacy-related questions or requests, contact:</p>
                    <p>
                        Email:{" "}
                        <a
                            href="mailto:contact@nemiply.com"
                            className="text-cyan-400 hover:text-cyan-300"
                        >
                            contact@nemiply.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
