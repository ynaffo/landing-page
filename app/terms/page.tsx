export default function TermsPage() {
    return (
        <div className="min-h-screen bg-[#020617] text-gray-300 py-20 px-4 md:px-8">
            <div className="max-w-3xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8">TERMS OF SERVICE</h1>
                <p className="text-sm text-gray-500">Last updated: January 2026</p>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">1. Description of Service</h2>
                    <p>
                        Nemiply is an AI-powered tool designed to help creators and businesses
                        analyze and manage public comments on their own social media content.
                        The service provides comment analysis, categorization, fan and lead
                        identification based on public engagement, and AI-assisted comment
                        replies.
                    </p>
                    <p>
                        The service does not send direct messages, publish content, or access
                        private user data.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">2. Eligibility</h2>
                    <p>
                        You must have the legal right to connect and manage the social media
                        accounts you use with the Service. You are responsible for complying
                        with all applicable platform terms and policies.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        3. User Responsibilities
                    </h2>
                    <p>You agree that you:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                            Will use the Service only with accounts you own or are authorized to
                            manage
                        </li>
                        <li>
                            Will not use the Service for spam, harassment, or abusive behavior
                        </li>
                        <li>Will comply with all applicable social media platform rules</li>
                        <li>
                            Are responsible for any actions taken through your connected
                            accounts
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        4. Automation and Limits
                    </h2>
                    <p>
                        Certain features may include automated or AI-assisted actions such as
                        comment replies or comment likes. These actions are:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>User-configurable</li>
                        <li>Rate-limited</li>
                        <li>Intended to support genuine engagement</li>
                    </ul>
                    <p>
                        The Service does not guarantee increased reach, growth, or engagement.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        5. Data Provided by Users
                    </h2>
                    <p>
                        If you choose to upload or provide any data manually, you confirm that
                        you have the right to provide such data and that its use complies with
                        applicable laws and platform policies.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">
                        6. Service Availability
                    </h2>
                    <p>
                        The Service is provided on an “as-is” and “as-available” basis.
                        Features may change, be limited, or discontinued at any time.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">7. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate access to the Service if
                        these Terms are violated or if required to comply with platform
                        policies or legal obligations.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">8. Contact</h2>
                    <p>For questions or concerns, contact:</p>
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
