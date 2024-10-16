import PropTypes from "prop-types"

export function LogoSmall({ className }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500">
      <g fill="#2979FF">
        <path d="M269.3 274.1a43.5 43.5 0 0 1-43.4-43.4v-179l.1-3.5h-.1a225.9 225.9 0 1 0 225.9 226v-.2l-3.4.1H269.3Z" />
        <path d="M495.6 181.5A226.1 226.1 0 0 0 274.2 0a53 53 0 0 0 0 3.4v179a43.5 43.5 0 0 0 43.3 43.5h179.1l3.4-.1c0-15-1.5-29.7-4.4-44.3Zm-42.4 14.1H345.1a26.3 26.3 0 0 1-26.3-26.2V61.2l.1-2a136.6 136.6 0 0 1 136.4 136.4h-2Z" />
      </g>
    </svg>
  )
}

LogoSmall.propTypes = {
  className: PropTypes.string,
}
