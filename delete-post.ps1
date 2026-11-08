$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$dir = Join-Path $root "src\content\posts"
if (-not (Test-Path $dir)) { Write-Host "No posts folder."; exit }
$files = Get-ChildItem -Path $dir -Filter *.md | Sort-Object Name
if ($files.Count -eq 0) { Write-Host "No posts to delete."; exit }

$posts = @()
foreach ($f in $files) {
  $title = $f.BaseName
  $content = Get-Content $f.FullName -Raw
  if ($content -match '(?m)^title:\s*(.+)$') { $title = $matches[1].Trim() }
  $posts += [PSCustomObject]@{ File = $f; Title = $title }
}

Write-Host "Available posts:"
for ($i = 0; $i -lt $posts.Count; $i++) {
  Write-Host ("  {0}. {1}" -f ($i + 1), $posts[$i].Title)
}
$choice = Read-Host "Enter number to delete (or 0 to cancel)"
if (-not ($choice -match '^\d+$')) { Write-Host "Invalid input."; exit }
$idx = [int]$choice
if ($idx -eq 0) { Write-Host "Cancelled."; exit }
if ($idx -lt 1 -or $idx -gt $posts.Count) { Write-Host "Out of range."; exit }

$target = $posts[$idx - 1]
$confirm = Read-Host "Delete '$($target.Title)'? (y/n)"
if ($confirm -ne 'y' -and $confirm -ne 'Y') { Write-Host "Cancelled."; exit }
Remove-Item -Path $target.File.FullName -Force
Write-Host "Deleted: $($target.File.Name)"
Write-Host "Run 'git add .; git commit -m `"Delete post`"; git push' to update the site."