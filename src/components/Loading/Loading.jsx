export default function Loading({loadingText}){
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>Loading {loadingText}...</p>
    </div>
  );
};