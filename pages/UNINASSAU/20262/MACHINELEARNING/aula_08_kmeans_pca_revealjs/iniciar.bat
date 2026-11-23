@echo off
cd /d "%~dp0"
python -m http.server 8004
pause
