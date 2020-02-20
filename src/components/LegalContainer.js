import React from 'react';
export default class Legal extends React.Component {
    render() {
        if(this.props.IsBot === true) {
            return (
                <div>
                    <div className="legal-heading">
                        <h1 className="center">Skuld (the bot) Privacy Policy</h1>
                        <p className="left">Last updated: <span className="underline">April 02, 2018</span></p>
                        <hr />
                    </div>
                    <h3>Use of Skuld (Discord Bot)</h3>
                    <p>By inviting Skuld to your Discord Server (Guild) you grant Skuld the ability to store the information about you:</p>
                    <ol type="i">
                        <li>Your Discord User ID,</li>
                        <li>Your Discord username</li>
                    </ol>
                    <p>Skuld will not automatically store other information. In the event that you use a command to store extra data, you approve to have this information stored by typing it in a command.<br/></p>
                    <h4>1.2. Liability</h4>
                    <p>We are in no way liable of potential data loss, in this event we will post an announcement in the Support Guild. Data retrieval may be permitted with an undoctored screenshot. If any of us doubt the legitimacy, we may request an invite to double check if it is legitimate. If this is declined, the user will not be compensated.</p>
                    <h4>1.3. Tracking</h4>
                    <p>Skuld does not track any sensitive data (i.e. Chat Messages, Private Messages). We value your privacy.</p>
                    <hr />
                    <div className="legal-heading">
                        <h1 className="center">Skuld (the bot) Terms of Service ("Terms")</h1>
                        <p className="left">Last updated: <span className="underline">March 23, 2019</span></p>
                        <hr />
                    </div>
                    <h4>1. Self-Hosting</h4>
                    <p>With Skuld being an open sourced bot, this usually means that it can be reused without any issue, however you can not claim ownership of the bot.</p>
                    <h4>1.2. Support</h4>
                    <p>We offer zero support for other users setting up Skuld as an external program. Nor is it our priority to offer guides to do so. It is only open sourced for educational reasons.</p>
                    <h4>2. Cheating</h4>
                    <p>We do not condone cheating of any kind, these are but are not limited to:</p>
                    <ol>
                        <li>Using "selfbots" to farm for currency</li>
                        <li>finding and exploiting glitches/exploits for personal benefits</li>
                        <li>finding and witholding exploits based on the open source nature of the bot</li>
                        <li>intentionally breaking the bot for exploitative nature</li>
                    </ol>
                    <h4>3. Currency</h4>
                    <p>You agree to not try to sell any of the virtual currency Skuld uses to other users for real money.</p>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="legal-heading">
                        <h1 className="center">Skuld (the website) Privacy Policy</h1>
                        <p className="left">Last updated: <span className="underline">January 03, 2018</span></p>
                        <hr />
                    </div>
                    <h3>Use of Skuld (Website)</h3>
                    <p>By browsing this website, you consent to the use of cookies, these are used in conjecture with the Cloudflare service to help accelerate your browsing experience &amp; to allow logging in (and maintaining the session) with the Discord API Service.</p>
                    <hr />
                    <div className="legal-heading">
                        <h1 className="center">Skuld (the website) Terms of Service ("Terms")</h1>
                        <p className="left">Last updated: <span className="underline">April 02, 2018</span></p>
                        <hr />
                    </div>
                    <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the https://skuldbot.uk/ website (the "Service") operated as SkuldBot Team ("us", "we", or "our").</p>
                    <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.</p>
                    <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
                    <h4>Links To Other Web Sites</h4>
                    <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by us.</p>
                    <p>We have no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that we are not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</p>
                    <p>We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
                    <h4>Termination</h4>
                    <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
                    <p>All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.</p>
                    <h4>Governing Law</h4>
                    <p>These Terms shall be governed and construed in accordance with the laws of United Kingdom, without regard to its conflict of law provisions.</p>
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
                    <h4>Changes</h4>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
                    <h4>Contact Us</h4>
                    <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@skuldbot.uk">legal@skuldbot.uk</a></p>
                </div>
            )
        }
    }
}