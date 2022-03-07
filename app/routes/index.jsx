import { Link } from "remix";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>lexcode.dev</h1>
      <h2>
        Alex Oliveira / <span>Front-end Developer</span>
      </h2>

      <ul>
        <li>
          <a
            href="https://github.com/lexcode"
            title="github/lexcode"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/lexcode/"
            title="linkedin/in/lexcode"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/lexcode"
            title="Twitter/lexcode"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/lexcode"
            title="Instagram/lexcode"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
}
