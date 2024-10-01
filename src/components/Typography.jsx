import PropTypes from "prop-types"
import { cn } from "@/lib/utils"

export function Heading({ tag = "h1", className, children }) {
  const Tag = tag

  return (
    <Tag
      className={cn(
        "font-semibold mb-4",
        {
          "text-2xl md:text-3xl lg:text-4xl md:mb-6": tag === "h1",
          "text-xl lg:text-3xl md:mb-6": tag === "h2",
          "text-lg lg:text-2xl": tag === "h3",
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}

export function BodyText({ tag = "p", variant = "normal", className, children }) {
  const Tag = tag

  return (
    <Tag
      className={cn(
        "font-normal mb-4",
        {
          "text-base md:text-lg": variant === "normal",
          "text-sm md:text-base": variant === "small",
        },
        className
      )}
    >
      {children}
    </Tag>
  )
}

// PROP TYPES

const CommonTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Heading.propTypes = { ...CommonTypes, tag: PropTypes.oneOf(["h1", "h2", "h3"]) }
BodyText.propTypes = {
  ...CommonTypes,
  size: PropTypes.oneOf(["normal", "small"]),
  tag: PropTypes.oneOf([
    "p",
    "span",
    "div",
    "ul",
    "li",
    "blockquote",
    "pre",
    "code",
    "strong",
    "em",
    "small",
    "mark",
    "del",
    "ins",
    "sub",
    "sup",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "dl",
    "dt",
    "dd",
  ]),
}
