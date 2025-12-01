import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGetPostByIdQuery, useActionOnPostMutation } from "../../features/content/contentApi";
import DeleteModal from "../../components/common/DeleteModal";
import { toast } from "react-toastify";

export default function ContentUserPostDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: post, isLoading, isFetching } = useGetPostByIdQuery(id ?? "", { skip: !id });

  const [actionOnPost, { isLoading: actionLoading }] = useActionOnPostMutation();

  const [mediaIndex, setMediaIndex] = useState<number>(0);
  const [confirmAction, setConfirmAction] = useState<null | { type: "hide" | "unhide" | "delete" }>(
    null
  );

  // build a unified media list: images first then videos
  const media = useMemo(() => {
    if (!post) return [];
    const imgs = Array.isArray(post.imageUrl) ? post.imageUrl : [];
    const vids = Array.isArray(post.videoUrl) ? post.videoUrl : [];
    // represent media as { type: 'image'|'video', url }
    return [
      ...imgs.map((u) => ({ type: "image" as const, url: u })),
      ...vids.map((u) => ({ type: "video" as const, url: u })),
    ];
  }, [post]);

  useEffect(() => {
    if (media.length === 0) {
      setMediaIndex(0);
    } else if (mediaIndex >= media.length) {
      setMediaIndex(media.length - 1);
    }
  }, [media.length, mediaIndex]);

  const goPrev = () => setMediaIndex((i) => (i - 1 + media.length) % Math.max(1, media.length));
  const goNext = () => setMediaIndex((i) => (i + 1) % Math.max(1, media.length));

  if (isLoading || (!post && !isFetching)) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="WrapperArea">
        <div className="WrapperBox">Post not found</div>
      </div>
    );
  }

  const handleAction = async (type: "hide" | "unhide" | "delete") => {
    try {
      await actionOnPost({ postId: post.id, type, userId: post.user.id }).unwrap();
      toast.success(
        type === "hide" ? "Post hidden" : type === "unhide" ? "Post unhidden" : "Post deleted"
      );
      setConfirmAction(null);
      if (type === "delete") {
        navigate(`/content/${post.user.id}`);
      }
    } catch (err: any) {
      console.error("action failed", err);
      toast.error(err?.data?.message || "Failed to perform action");
      setConfirmAction(null);
    }
  };

  return (
    <div className="WrapperArea">
      <div className="WrapperBox">
        <div className="SmallWrapper">
          <div className="TitleBox">
            <h4 className="Title">Post Details</h4>

            <button
              className="Back"
              onClick={() => navigate(`/content/${post.user.id}`)}
              aria-label="Back"
              title="Back"
            >
              Back
            </button>
          </div>
          <div className="post-box" style={{ display: "flex", gap: 24 }}>
            <div className="post-left">
              <div className="carousel-react" style={{ position: "relative", padding: "10px" }}>
                {media.length === 0 ? (
                  <div
                    style={{
                      height: 320,
                      background: "#eee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    No media
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        width: "100%",
                        height: 320,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {media[mediaIndex].type === "image" ? (
                        <img
                          src={media[mediaIndex].url}
                          alt={`media-${mediaIndex}`}
                          style={{ maxWidth: "100%", maxHeight: 320, objectFit: "contain" }}
                        />
                      ) : (
                        <video controls style={{ maxWidth: "100%", maxHeight: 320 }}>
                          <source src={media[mediaIndex].url} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>

                    {media.length > 1 && (
                      <div
                        style={{
                          marginTop: 8,
                          display: "flex",
                          justifyContent: "center",
                          gap: 8,
                          alignItems: "center",
                        }}
                      >
                        <button
                          onClick={goPrev}
                          disabled={media.length <= 1}
                          style={{ border: "none", padding: "5px" }}
                        >
                          Prev
                        </button>
                        <span>
                          {mediaIndex + 1} / {media.length}
                        </span>
                        <button
                          onClick={goNext}
                          disabled={media.length <= 1}
                          style={{ border: "none", padding: "5px" }}
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="post-right" style={{ flex: 1 }}>
              <div
                className="user-header"
                style={{ display: "flex", alignItems: "center", gap: 12 }}
              >
                <img
                  src={post.user?.avatar ?? "/assets/images/user.png"}
                  alt=""
                  style={{ width: 48, height: 48, borderRadius: 8 }}
                />
                <div>
                  <div style={{ fontWeight: 600 }}>
                    {post.user?.name ?? post.user?.userName ?? "Unknown"}
                  </div>
                  <div style={{ fontSize: 12, color: "#666" }}>
                    {post.user?.userId ? `@${post.user.userId}` : ""}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 16 }}>
                {post.caption ? (
                  <div style={{ marginBottom: 8, whiteSpace: "pre-wrap" }}>{post.caption}</div>
                ) : null}
                {post.text ? (
                  <div style={{ marginBottom: 8, whiteSpace: "pre-wrap" }}>{post.text}</div>
                ) : null}
                <div style={{ fontSize: 12, color: "#666" }}>
                  {post.createdAt ? new Date(post.createdAt).toLocaleString() : ""}
                </div>
              </div>

              <div className="comment-box" style={{ marginTop: 16 }}>
                <h5>Comments ({post.comments?.length ?? 0})</h5>
                {post.comments && post.comments.length ? (
                  post.comments.map((c: any) => (
                    <div key={c._id ?? c.id} className="comment" style={{ marginBottom: 12 }}>
                      <strong>
                        {(c.user && (c.user.name || c.user.username)) ?? c.userId ?? "User"}
                      </strong>
                      <div style={{ fontSize: 14 }}>{c.text}</div>
                      <div style={{ fontSize: 12, color: "gray" }}>
                        {c.createdAt ? new Date(c.createdAt).toLocaleString() : ""} ·{" "}
                        {Array.isArray(c.likes) ? c.likes.length : 0} likes
                      </div>
                    </div>
                  ))
                ) : (
                  <div>No comments</div>
                )}
              </div>

              <div className="reports" style={{ marginTop: 12 }}>
                <strong>Reports:</strong>
                <div>
                  {post.reports && post.reports.length ? (
                    post.reports.map((r: any) => (
                      <div key={r._id ?? r.id} style={{ fontSize: 13 }}>
                        {r.name ?? r.userName ?? r.userId}
                      </div>
                    ))
                  ) : (
                    <div style={{ color: "#666" }}>No reports</div>
                  )}
                </div>
              </div>

              <div
                className="icons mt-3"
                style={{
                  marginTop: 16,
                  display: "flex",
                  gap: 12,
                  borderRadius: "4px",
                  padding: "10px",
                  justifyContent: "space-evenly",
                }}
              >
                <button
                  className="hide btn"
                  onClick={() => setConfirmAction({ type: post.isDeleted ? "unhide" : "hide" })}
                  disabled={actionLoading}
                  style={{ background: "#e8e8e8" }}
                >
                  {post.isDeleted ? "Unhide this post" : "Hide this post"}
                </button>
                <button
                  className="delete btn btn-danger"
                  onClick={() => setConfirmAction({ type: "delete" })}
                  disabled={actionLoading}
                >
                  Delete this post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {confirmAction && (
        <DeleteModal
          title={
            confirmAction.type === "delete"
              ? "Delete"
              : confirmAction.type === "hide"
                ? "Hide"
                : "Unhide"
          }
          message={
            confirmAction.type === "delete"
              ? "Are you sure you want to delete this post?"
              : confirmAction.type === "hide"
                ? "Are you sure you want to hide this post?"
                : "Are you sure you want to unhide this post?"
          }
          onConfirm={() => handleAction(confirmAction.type)}
          onClose={() => setConfirmAction(null)}
        />
      )}
    </div>
  );
}
