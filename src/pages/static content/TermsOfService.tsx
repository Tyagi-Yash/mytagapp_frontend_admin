import "../../assets/css/StaticPage.css";

function TermsOfService() {
  return (
    <div className="StaticPage">
      <main>
        <header>
          <h1>Terms & Conditions</h1>
          <p>For KonnectX</p>
          <p className="effective-date">Effective Date: 12th February 2026</p>
          <p>Company: Shiksha Vriksha 360 Eduserves Pvt Ltd</p>
          <p>Website: https://konnectx.app </p>
        </header>

        <div className="description">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By creating an account or using KonnectX, you agree to these Terms & Conditions. If
              you do not agree, you must discontinue use of the platform.
            </p>
          </section>

          <section>
            <h2>2. Eligibility</h2>
            <p>
              KonnectX is intended for users aged 12 and above. Users below 12 may use the platform
              only under parental guidance.
            </p>
          </section>

          <section>
            <h2>3. Account Responsibility</h2>
            <p>Users are responsible for:</p>
            <ul>
              <li>Keeping login details confidential</li>
              <li>Maintaining accurate profile information</li>
              <li>Any activity that happens through their account</li>
            </ul>
            <p>
              KonnectX reserves the right to remove accounts involved in misuse, impersonation,
              harassment, spam, or fraud.
            </p>
          </section>

          <section>
            <h2>4. User-Generated Content</h2>
            <p>
              Users may post content including text, images, videos, and other media. By posting,
              you grant KonnectX a limited license to display your content within the app.
            </p>
          </section>

          <section>
            <h2>5. Copyright Responsibility</h2>
            <p>Users must ensure content is:</p>
            <ul>
              <li>Copyright-free, or</li>
              <li>Self-created, or</li>
              <li>Properly licensed</li>
            </ul>
            <p>If a copyright claim arises, KonnectX may:</p>
            <ul>
              <li>Remove the content</li>
              <li>Request proof</li>
              <li>Suspend the account in case of repeated violations</li>
            </ul>
            <p>KonnectX is not responsible for copyrighted material uploaded by users.</p>
          </section>

          <section>
            <h2>6. Prohibited Activities</h2>
            <p>Users may NOT:</p>
            <ul>
              <li>Upload hate speech, nudity, violence, harassment or harmful content</li>
              <li>Violate privacy of others</li>
              <li>Attempt to hack, attack or abuse the platform</li>
              <li>Impersonate institutions or individuals</li>
              <li>Spread misinformation</li>
            </ul>
          </section>

          <section>
            <h2>7. Verification</h2>
            <p>
              KonnectX uses a third-party verification API to verify students, professionals,
              teachers, and institutions. We do NOT store documents or sensitive uploaded files.
            </p>
          </section>

          <section>
            <h2>8. Privacy & Security</h2>
            <ul>
              <li>One-to-one messages are end-to-end encrypted</li>
              <li>User credentials are fully encrypted</li>
              <li>We do not read or analyze private chats</li>
            </ul>
            <p>Please refer to the Privacy Policy for more details.</p>
          </section>

          <section>
            <h2>9. Termination</h2>
            <p>KonnectX may suspend or terminate accounts that violate these terms.</p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>KonnectX is not liable for:</p>
            <ul>
              <li>User behavior</li>
              <li>User-posted content</li>
              <li>Third-party actions</li>
              <li>Content misuse by other users</li>
            </ul>
          </section>

          <section>
            <h2>11. Changes to Terms</h2>
            <p>
              KonnectX may update these terms at any time. Continued use of the platform means
              acceptance of the updated terms.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default TermsOfService;
