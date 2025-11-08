import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadIcon from "@mui/icons-material/Download";

const EMAIL = "munpaty@gmail.com";
const SUBJECT = encodeURIComponent("Hello Patricia — portfolio inquiry");
const BODY = encodeURIComponent(
  "Hi Patricia,\n\nI found your portfolio and would like to connect regarding...\n\nThanks!"
);

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact</h1>
          <p>
            I’m open to collaborations, data projects, and teaching
            opportunities. Choose the option that suits you best:
          </p>

          <Box className="contact-cta">
            <Button
              variant="contained"
              startIcon={<EmailIcon />}
              href={`mailto:${EMAIL}?subject=${SUBJECT}&body=${BODY}`}
            >
              Email me
            </Button>

            <Button
              variant="outlined"
              startIcon={<LinkedInIcon />}
              href="https://linkedin.com/in/patymun"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Button>

            <Button
              variant="outlined"
              startIcon={<GitHubIcon />}
              href="https://github.com/patymunoz"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Button>

            {/* Opcional: enlaza tu CV si lo tienes en /public o un URL */}
            <Button
              variant="text"
              startIcon={<DownloadIcon />}
              href="/CV2025ENG.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </Button>

            <Button
              variant="text"
              startIcon={<ContentCopyIcon />}
              onClick={copyEmail}
            >
              {copied ? "Copied!" : "Copy email"}
            </Button>
          </Box>

          <small className="contact-note">
            Prefer scheduling? I can add a Calendly link here on request.
          </small>
        </div>
      </div>
    </div>
  );
}

export default Contact;
