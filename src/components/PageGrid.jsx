import { cn } from "@/lib/utils"
import PropTypes from "prop-types"

export function PageGrid({ tag = "div", className, children }) {
  const Tag = tag

  return <Tag className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-3", className)}>{children}</Tag>
}

PageGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  tag: PropTypes.oneOf(["div", "ul"]),
}
