import Link from "next/link";

export default function PostLink({ href, children, ...props }) {
  const isLocal = href.startsWith("/");

  const linkClass =
    "text-blue-600 dark:text-blue-500 font-medium font-inter hover:underline";

  if (isLocal) {
    return (
      <Link href={href} className={linkClass} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <a
        href={href}
        {...props}
        className={linkClass}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }
}
