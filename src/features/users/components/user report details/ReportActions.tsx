import type { ReportActionsProps } from "../../types";

export default function ReportActions({
  onSendWarning,
  onBlockUser,
  isBlocking,
}: ReportActionsProps) {
  return (
    <div className="mb-3">
      <button className="Button" type="button" onClick={onSendWarning}>
        Send a Warning Notification
      </button>
      <button className="Button Cancel" type="button" onClick={onBlockUser} disabled={isBlocking}>
        {isBlocking ? "Blocking..." : "Block User"}
      </button>
    </div>
  );
}
