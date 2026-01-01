@echo off
setlocal enabledelayedexpansion

echo ========================================
echo Git Push to GitHub
echo ========================================
echo.

REM Try to find git executable
set "GIT_CMD="

REM Check if git is in PATH
where git >nul 2>&1
if %errorlevel% equ 0 (
    set "GIT_CMD=git"
    goto :found
)

REM Check common GitHub Desktop locations
for /d %%d in ("%LOCALAPPDATA%\GitHubDesktop\app-*") do (
    if exist "%%d\resources\app\git\cmd\git.exe" (
        set "GIT_CMD=%%d\resources\app\git\cmd\git.exe"
        goto :found
    )
)

REM Check standard Git for Windows location
if exist "C:\Program Files\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Program Files\Git\cmd\git.exe"
    goto :found
)

if exist "C:\Program Files (x86)\Git\cmd\git.exe" (
    set "GIT_CMD=C:\Program Files (x86)\Git\cmd\git.exe"
    goto :found
)

echo ERROR: Could not find git executable!
echo Please install Git for Windows or GitHub Desktop
pause
exit /b 1

:found
echo Found git at: %GIT_CMD%
echo.

REM Initialize git repository if needed
if not exist ".git" (
    echo Initializing Git repository...
    "%GIT_CMD%" init
    "%GIT_CMD%" branch -M main
) else (
    echo Git repository already initialized.
)

echo.
echo Adding all files...
"%GIT_CMD%" add .

echo.
echo Committing changes...
"%GIT_CMD%" commit -m "Next.js 15 Strapi App with v5 compatibility"

echo.
echo Adding remote (if not already added)...
"%GIT_CMD%" remote add origin https://github.com/Proftok/nextjs-app.git 2>nul
"%GIT_CMD%" remote set-url origin https://github.com/Proftok/nextjs-app.git

echo.
echo Pushing to GitHub...
"%GIT_CMD%" push -u origin main

echo.
echo ========================================
echo Push complete!
echo ========================================
pause

