import "../../assets/css/StaticPage.css";

function PrivacyPolicy() {
  return (
    <div className="StaticPage">
      <main>
        <header>
          <h1>Privacy Policy</h1>
          <p>For KonnectX</p>
          <p className="effective-date">Effective Date: 12th February 2026</p>
          <p>Company: Shiksha Vriksha 360 Eduserves Pvt Ltd </p>
        </header>

        <div className="description">
          <section>
            <h2>1. Information We Collect</h2>
            <p>
              We collect the following information for account creation and platform functionality:
            </p>
            <ul>
              <li>Name, email ID, phone number</li>
              <li>Profile details (bio, interests, category)</li>
              <li>Public posts, comments, likes, shares</li>
              <li>Device information (for security and optimization)</li>
            </ul>
          </section>

          <section>
            <h2>2. Sensitive Information</h2>
            <p>KonnectX does NOT store:</p>
            <ul>
              <li>ID proofs</li>
              <li>Documents uploaded during verification</li>
              <li>Government IDs</li>
            </ul>
            <p>Verification is done via a third-party secure API and documents are not saved.</p>
          </section>

          <section>
            <h2>3. Messages & Encryption</h2>
            <ul>
              <li>All 1-to-1 chats are end-to-end encrypted</li>
              <li>KonnectX cannot read, access, or store private messages</li>
              <li>Messages are encrypted at rest and in transit</li>
            </ul>
          </section>

          <section>
            <h2>4. How We Use Data</h2>
            <p>We use your data to:</p>
            <ul>
              <li>Run the platform</li>
              <li>Improve user experience</li>
              <li>Suggest relevant content and connections</li>
              <li>Secure accounts</li>
              <li>Prevent misuse or abuse</li>
            </ul>
            <p>We do not sell personal data.</p>
          </section>

          <section>
            <h2>5. Safety of Minors</h2>
            <ul>
              <li>KonnectX is suitable for users aged 12+</li>
              <li>Children under 12 require parental supervision</li>
              <li>We do not knowingly collect underage data</li>
            </ul>
          </section>

          <section>
            <h2>6. Third-Party Services</h2>
            <p>We may integrate trusted third-party APIs for:</p>
            <ul>
              <li>Verification</li>
              <li>Notifications</li>
              <li>Analytics</li>
              <li>Security</li>
            </ul>
            <p>These services follow strict privacy standards.</p>
          </section>

          <section>
            <h2>7. Content Ownership</h2>
            <p>
              Users retain rights to the content they create. However, they are responsible for
              ensuring it does not violate copyright or legal rules.
            </p>
          </section>

          <section>
            <h2>8. Data Sharing</h2>
            <p>We do NOT share personal data with third parties except:</p>
            <ul>
              <li>When required by law</li>
              <li>For verification purposes</li>
              <li>For security reasons</li>
              <li>To operate the platform</li>
            </ul>
          </section>

          <section>
            <h2>9. User Rights</h2>
            <p>You may request to:</p>
            <ul>
              <li>Delete your account</li>
              <li>Update your information</li>
              <li>Request data deletion</li>
            </ul>
          </section>

          <section>
            <h2>10. Updates to Privacy Policy</h2>
            <p>KonnectX may update this policy. Continued usage means acceptance of new terms.</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default PrivacyPolicy;
