@echo off
cd /d "C:\Users\Charles\Desktop\Projects\AKC Real Estate\akm-real-estate"
openclaude -p "Read src/app/page.tsx, src/app/layout.tsx, src/app/globals.css and all .tsx files in src/components. Summarize what this project is and its current state. Write your answer to ANALYSIS.md" > openclaude.log 2>&1
echo DONE > openclaude.done
