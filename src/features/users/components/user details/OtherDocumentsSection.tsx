type OtherDocProps = {
  otherDocuments?: string[];
};

export default function OtherDocumentsSection({ otherDocuments }: OtherDocProps) {
  return (
    <div className="accordionBox DocumnetInfo">
      <div className="accordionInfo">
        <article>
          <aside style={{ width: "50%" }}>
            {otherDocuments && otherDocuments.length ? (
              <div className="DocumnetBox">
                <figcaption>
                  <span>
                    <img src={otherDocuments[0]} alt="Document" />
                  </span>
                </figcaption>
              </div>
            ) : (
              <p>No other documents uploaded.</p>
            )}
          </aside>
        </article>
      </div>
    </div>
  );
}
