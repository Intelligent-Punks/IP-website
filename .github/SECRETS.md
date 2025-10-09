# GitHub Secrets Configuration

## Required Secrets

Add these secrets in your GitHub repository:
**Settings → Secrets and variables → Actions → New repository secret**

### SFTP Authentication (Choose one method)

#### Method 1: Password Authentication (deploy.yml)
```
SFTP_HOST              - Cloudways server hostname (e.g., server.cloudways.com)
SFTP_USERNAME          - SFTP username
SFTP_PASSWORD          - SFTP password
```

#### Method 2: SSH Key Authentication (deploy-ssh.yml)
```
SFTP_HOST              - Cloudways server hostname
SFTP_USERNAME          - SFTP username
SSH_PRIVATE_KEY        - Private SSH key content
```

### Deployment Paths
```
SFTP_REMOTE_PATH_STAGE - Stage server path (e.g., /home/master/applications/appname/public_html)
SFTP_REMOTE_PATH_PROD  - Production server path (e.g., /home/master/applications/appname/public_html)
```

## How to Get Cloudways SFTP Credentials

1. Log in to Cloudways Dashboard
2. Go to your Application
3. Click on "Access Details" in the left sidebar
4. Copy SFTP/SSH credentials:
   - **Master Credentials** for production
   - **Application Credentials** for specific app access

## SSH Key Setup (Optional)

If using SSH key authentication:

1. Generate SSH key pair:
   ```bash
   ssh-keygen -t rsa -b 4096 -C "github-actions"
   ```

2. Add public key to Cloudways:
   - Go to Cloudways Dashboard → Server → SSH Public Keys
   - Add your public key

3. Add private key to GitHub Secrets:
   - Copy entire private key content (including BEGIN/END lines)
   - Paste into GitHub Secret `SSH_PRIVATE_KEY`

## Workflow Selection

- Use `deploy.yml` for password authentication (default)
- Use `deploy-ssh.yml` for SSH key authentication (more secure)
  - To switch: rename files accordingly

## Testing

After adding secrets:
1. Push to `stage` branch to test staging deployment
2. Verify files appear in stage server
3. Push to `main` branch for production deployment

## Security Notes

- Never commit credentials to repository
- Use SSH key authentication for better security
- Rotate credentials regularly
- Use separate credentials for stage and production if possible

