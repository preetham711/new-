# Push to GitHub with Personal Access Token
# This script will push all files to your GitHub repository

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Push Portfolio to GitHub" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check git status
Write-Host "Checking Git status..." -ForegroundColor Yellow
git status
Write-Host ""

# Get GitHub token
Write-Host "Enter your GitHub Personal Access Token:" -ForegroundColor Yellow
Write-Host "(Get one at: https://github.com/settings/tokens)" -ForegroundColor Gray
$token = Read-Host "Token"

if ([string]::IsNullOrWhiteSpace($token)) {
    Write-Host "ERROR: Token cannot be empty!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan

# Create temporary credentials
$env:GIT_ASKPASS = "powershell.exe"
$env:GIT_ASKPASS_RESULT = $token

# Push to GitHub
git push https://$token@github.com/preetham711/new-.git main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "✓ Push Successful!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your portfolio is now on GitHub!" -ForegroundColor Green
    Write-Host "View it at: https://github.com/preetham711/new-" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "✗ Push Failed!" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "Try these solutions:" -ForegroundColor Yellow
    Write-Host "1. Check your token is correct" -ForegroundColor Gray
    Write-Host "2. Verify token has 'repo' scope" -ForegroundColor Gray
    Write-Host "3. Check your internet connection" -ForegroundColor Gray
    exit 1
}
