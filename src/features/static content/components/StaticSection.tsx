import { useState, useEffect } from "react";

type Props = {
  content?: string;
  isLoading: boolean;
  onSave: (value: string) => Promise<any>;
};

export default function StaticSection({ content, isLoading, onSave }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(content ?? "");
  }, [content]);

  const handleSave = async () => {
    await onSave(value);
    setIsEditing(false);
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {!isEditing ? (
            <>
              <div style={{ whiteSpace: "pre-line" }}>{content}</div>

              <button className="btn btn-primary mt-3" onClick={() => setIsEditing(true)}>
                Edit
              </button>
            </>
          ) : (
            <>
              <textarea
                className="form-control"
                rows={15}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />

              <div className="mt-3">
                <button className="btn btn-success me-2" onClick={handleSave}>
                  Save
                </button>

                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
