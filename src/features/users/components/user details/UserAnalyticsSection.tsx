import type { UserAnalytics } from "../../types";

type Props = {
  analytics: UserAnalytics;
};

export default function UserAnalyticsSection({ analytics }: Props) {
  return (
    <div className="InformationBox">
      <h3>Analytics</h3>
      <div className="Informations">
        <div className="ProfileInfo">
          <article>
            <aside className="w-100">
              <p>
                <strong>Item Posted </strong>
                <span>{analytics?.totalPosts ?? 0}</span>
              </p>
              <p>
                <strong>Text Posts </strong>
                <span>{analytics?.totalTextPosts ?? 0}</span>
              </p>
              <p>
                <strong>Videos</strong>
                <span>{analytics?.totalVideos ?? 0}</span>
              </p>
              <p>
                <strong>Reels</strong>
                <span>{analytics?.totalReels ?? 0}</span>
              </p>
              <p>
                <strong>Photos</strong>
                <span>{analytics?.totalPhotos ?? 0}</span>
              </p>
              <p>
                <strong>Reports </strong>
                <span>{analytics?.totalReports ?? 0}</span>
              </p>
              <p>
                <strong>Pinned Posts </strong>
                <span>{analytics?.pinnedPosts ?? 0}</span>
              </p>
            </aside>
          </article>
        </div>
      </div>
    </div>
  );
}
