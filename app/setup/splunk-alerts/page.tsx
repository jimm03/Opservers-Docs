'use client';
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowLeft, FaEnvelope, FaSlack } from 'react-icons/fa'

export default function SplunkAlertsSetup() {
  return (
    <div>
      <div className="card" style={{ lineHeight: '1.8', fontSize: '1rem' }}>
        <Link
          href="/setup"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '2rem',
            color: 'var(--primary-color)',
            textDecoration: 'none',
            fontWeight: '500',
          }}
        >
          <FaArrowLeft size={16} style={{ marginRight: '0.5rem' }} />
          Back to Setup
        </Link>

        <h1 style={{ marginBottom: '0.75rem' }}>Setting Up Splunk Alerts</h1>
        <p style={{ marginBottom: '1.5rem' }}>
          Follow this guide to configure Splunk alerts and enable notifications
          through both <strong>email</strong> and <strong>Slack</strong>.
        </p>

        <h2>Generate Google App Password</h2>
        <hr />
        <p>
          This section walks you through generating a <strong>Google App Password</strong>,
          which Splunk uses to send alert emails securely.
        </p>

        <ol className="bullet-list" style={{ marginTop: '1rem' }}>
          <li>
            Create a Gmail account and log in.
            This account will act as the sender for Splunk email notifications.
            Make sure to enable 2-factor authentication for better security.
          </li>
          <li>
            Go to <strong>Profile Image → Manage your Google Account</strong>,
            then search for <strong>App Passwords</strong>.
          </li>
          <li>
            Under <strong>App Password</strong>, enter an <strong>App name</strong> and click <strong>Create</strong>.
          </li>
          <li>
            Copy the <strong>generated app password</strong> and save it for later.
          </li>
        </ol>

        <h2>Setup Splunk Email Settings</h2>
        <hr />
        <p>
          Next, configure Splunk to send alerts automatically using your Gmail account.
        </p>

        <h3>1. Access Email Settings</h3>
        <p>
          Navigate to <strong>Settings → Server Settings → Email Settings</strong>.
        </p>

        <h3>2. Configure Mail Server Settings</h3>
        <p>
          Under <strong>Mail Server Settings</strong>:
        </p>

        <h4>Enter Mail Host and Enable TLS</h4>
        <div className="image-section">
          <Image
            src="/images/splunk-alerts/email-settings-1.png"
            alt="Splunk Mail Server Settings"
            width={800}
            height={400}
            className="setup-image"
          />
        </div>

        <h4>Enter Credentials</h4>
        <p>
          Fill in the <strong>Username</strong>, <strong>Password</strong>, and
          <strong> Confirm Password</strong> fields using your Gmail address
          and the generated app password.
        </p>
        <div className="image-section">
          <Image
            src="/images/splunk-alerts/email-settings-2.png"
            alt="Splunk Email Credentials"
            width={800}
            height={400}
            className="setup-image"
          />
        </div>

        <h3>3. Configure Email Domains</h3>
        <p>
          Under <strong>Email Domains</strong>, select <strong>Allow all</strong>,
          then click <strong>Save</strong>.
        </p>
        <div className="image-section">
          <Image
            src="/images/splunk-alerts/email-settings-3.png"
            alt="Splunk Email Domains"
            width={800}
            height={200}
            className="setup-image"
          />
        </div>

        <h2>Setup Slack App</h2>
        <hr />
        <p>
          Now, create and configure a <strong>Slack App</strong> to receive Splunk alerts directly in a channel.
        </p>

        <ol className="bullet-list" style={{ marginTop: '1rem' }}>
          <li>
            Go to your <strong>Slack workspace</strong> (or create a new one if needed).
          </li>
          <li>
            Navigate to <strong>+ Add apps → Open in Slack Marketplace → Build → Create New App → From scratch</strong>.
          </li>
          <li>
            Enter your <strong>App name</strong> and select the workspace, then click <strong>Create App</strong>.
          </li>
          <li>
            Open the <strong>OAuth & Permissions</strong> menu and, under <strong>Scopes</strong>,
            add the <code>chat:write</code> scope.
          </li>
        </ol>

        <div className="image-section">
          <Image
            src="/images/splunk-alerts/slack-scopes.png"
            alt="Slack OAuth Scopes"
            width={800}
            height={400}
            className="setup-image"
          />
        </div>

        <ol className="bullet-list">
          <li>
            Go to <strong>Install App</strong>, click <strong>Install</strong>,
            and approve by selecting <strong>Allow</strong>.
          </li>
          <li>
            Copy the <strong>Bot User OAuth Token</strong> — you’ll use it later.
          </li>
          <li>
            In Slack, open your desired channel and invite the bot by typing
            <code>/invite @bot_name</code>.
          </li>
        </ol>

        <h2>Setup Slack App Alert Integration</h2>
        <hr />
        <p>
          Next, integrate the Slack App with Splunk to send alerts directly to your channel.
        </p>

        <ol className="bullet-list">
          <li>
            Go to <strong>Apps → Find More Apps</strong>, search for
            <strong> Slack App Alert Integration</strong>, and click <strong>Install</strong>.
          </li>
          <li>
            Once installed, open <strong>App → Splunk App Alert Integration → Add-on Settings</strong>.
          </li>
          <li>
            Enter your <strong>Bot User OAuth Token</strong> from the previous step and click <strong>Save</strong>.
          </li>
        </ol>

        <h2>Create Splunk Alert</h2>
        <hr />
        <p>
          Finally, create an alert to monitor events and trigger notifications when conditions are met.
        </p>

        <ol className="bullet-list">
          <li>
            Open <strong>Search & Reporting App</strong> and run a <strong>search query</strong>.
          </li>
          <li>
            Click <strong>Save As → Alert</strong>, then fill in the
            <strong> alert name</strong>, <strong>description</strong>,
            and <strong>trigger conditions</strong>.
          </li>
          <li>
            Under <strong>Trigger Actions</strong>, select both
            <strong> Send email</strong> and
            <strong> Slack App Alert Integration</strong>.
          </li>
        </ol>

        <h4>Send Email Configuration</h4>
        <ul className="bullet-list">
          <li>
            Enter the recipient email, priority, subject, and message.
          </li>
          <li>
            You can also include links to the alert, search results, or search string.
          </li>
        </ul>

        <h4>Slack App Alert Integration Configuration</h4>
        <ul className="bullet-list">
          <li>
            Enter the Slack channel name and compose your alert message.
          </li>
        </ul>

        <p>
          After entering all details, click <strong>Save</strong>.
        </p>

        <div
          className="alert alert-success"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '1.5rem',
          }}
        >
          <FaEnvelope size={18} />
          <FaSlack size={18} />
          <strong>Success:</strong> Your Splunk alerts are now configured to send
          notifications via both <strong>email</strong> and <strong>Slack</strong>.
        </div>

    
      </div>

      {/* ✅ Automatic spacing for <strong> text */}
      <style jsx>{`
        strong {
          margin: 0 0.15em;
          font-weight: 600;
          display: inline-block;
        }
      `}</style>
    </div>
  )
}
