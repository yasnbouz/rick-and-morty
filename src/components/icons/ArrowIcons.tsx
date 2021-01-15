function NextIcon() {
  return (
    <button aria-label="next page" type="button">
      <svg width="11" height="18" aria-hidden="true" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.280029 2.68875L6.57753 9L0.280029 15.3113L2.21878 17.25L10.4688 9L2.21878 0.75L0.280029 2.68875Z" fill="#FF0040" />
      </svg>
    </button>
  );
}
function PrevIcon() {
  return (
    <button aria-label="prev page" type="button">
      <svg width="11" height="18" aria-hidden="true" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.72 2.68875L4.42247 9L10.72 15.3113L8.78122 17.25L0.53122 9L8.78122 0.75L10.72 2.68875Z" fill="#FF0040" />
      </svg>
    </button>
  );
}
export { NextIcon, PrevIcon };
