const Dots = () => <>
  <svg
    className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
    width={404}
    height={784}
    fill="none"
    viewBox="0 0 404 784"
  >
    <defs>
      <pattern
        id="d2a68204-c383-44b1-b99f-42ccff4e5365"
        x={0}
        y={0}
        width={20}
        height={20}
        patternUnits="userSpaceOnUse"
      >
        <rect
          x={0}
          y={0}
          width={4}
          height={4}
          className="text-gray-200"
          fill="currentColor"
        />
      </pattern>
    </defs>
    <rect
      width={404}
      height={784}
      fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
    />
  </svg>
</>

export default Dots