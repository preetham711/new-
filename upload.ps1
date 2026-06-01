# GitHub Upload Script for Portfolio
# This script will upload all files to GitHub

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Portfolio GitHub Upload Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is installed
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "ERROR: Git is not installed!" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Git is installed" -ForegroundColor Green
Write-Host ""

# Get GitHub token from user
Write-Host "Enter your GitHub Personal Access Token:" -ForegroundColor Yellow
Write-Host "(Create one at: https://github.com/settings/tokens)" -ForegroundColor Gray
$token = Read-Host "Token"

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host "ERROR: Token cannot be empty!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Updating Git remote with token..." -ForegroundColor Cyan

# Update remote URL with token
git remote set-url origin "https://$token@github.com/preetham711/new-.git"

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to update remote!" -ForegroundColor Red
    exit 1
}

Write-Host "✓ Remote updated" -ForegroundColor Green
Write-Host ""

# Check git status
Write-Host "Checking Git status..." -ForegroundColor Cyan
git status

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
Write-Host "(This may take a moment...)" -ForegroundColor Gray
Write-Host ""

# Push to GitHub
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "================================" -ForegroundColor Green
    Write-Host "✓ Upload Successful!" -ForegroundColor Green
    Write-Host "================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your portfolio is now on GitHub!" -ForegroundColor Green
    Write-Host "View it at: https://github.com/preetham711/new-" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "================================" -ForegroundColor Red
    Write-Host "✗ Upload Failed!" -ForegroundColor Red
    Write-Host "================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Check your token is correct" -ForegroundColor Gray
    Write-Host "2. Verify token has 'repo' and 'workflow' scopes" -ForegroundColor Gray
    Write-Host "3. Check your internet connection" -ForegroundColor Gray
    exit 1
}
