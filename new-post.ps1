param(
  [Parameter(Mandatory=$true)][string]$Title,
  [string]$Date = (Get-Date -Format "MMMM yyyy"),
  [string]$Excerpt = "",
  [string]$Tag = "INSIGHT",
  [string]$PubDate = (Get-Date -Format "yyyy-MM-dd")
)
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$slug = ($Title.ToLower() -replace '[^a-z0-9]+','-').Trim('-')
$dir = Join-Path $root "src\content\posts"
if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }
$file = Join-Path $dir "$slug.md"
$md = @"
---
title: $Title
date: $Date
pubDate: $PubDate
excerpt: $Excerpt
tag: $Tag
gradient: linear-gradient(140deg, #0e1a18 0%, #0c0c0a 100%)
---

Write your post here.
"@
Set-Content -Path $file -Value $md -Encoding UTF8
Write-Host "Created src/content/posts/$slug.md"

# Open in MarkText if installed
$markText = $null
$cmd = Get-Command marktext -ErrorAction SilentlyContinue
if ($cmd) { $markText = $cmd.Source }
if (-not $markText) {
  $candidates = @(
    "C:\Program Files\MarkText\MarkText.exe",
    "C:\Program Files (x86)\MarkText\MarkText.exe",
    "$env:LOCALAPPDATA\Programs\MarkText\MarkText.exe"
  )
  foreach ($c in $candidates) { if (Test-Path $c) { $markText = $c; break } }
}
if ($markText) {
  Start-Process -FilePath $markText -ArgumentList "`"$file`""
  Write-Host "Opened in MarkText."
} else {
  Write-Host "MarkText not found; open the file manually."
}